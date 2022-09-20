import tl = require('azure-pipelines-task-lib/task');
const getNonInclusiveTerms = require("./non-inclusive-terms");
const getFilesFromDirectory = require("./read-files");
const checkFileForPhrase = require("./file-content");
const fs = require('fs');

async function run() {
    try {
        //const inputString: string | undefined = tl.getInput('samplestring', true);

        //const dir = process.env.GITHUB_WORKSPACE;
        const dir = tl.getVariable('System.DefaultWorkingDirectory');
        console.log('searching non inclusive words under',dir);

        const nonInclusiveTerms = await getNonInclusiveTerms();
        // list all files in the directory
        var filenames = getFilesFromDirectory(dir);
        var passed = true;

        filenames.forEach((filename: { toString: () => any; }) => {
            console.log(`Scanning file: ${filename}`);
        
            nonInclusiveTerms.forEach((phrase: { term: any; alternatives: any; }) => {
                var lines = checkFileForPhrase(filename.toString(), phrase.term);

                if (lines.length > 0) {
                    // The Action should fail
                    passed = false;

                    console.log(`Found the term '${phrase.term}', consider using alternatives: ${phrase.alternatives}`);
                    lines.forEach((line: { number: any; content: any; }) => {
                        console.log(`\t[Line ${line.number}] ${line.content}`);
                    });
                }
            });
        });
        
        if (!passed)
        {
            tl.setResult(tl.TaskResult.Failed, 'Found non inclusive terms in some files.');
        }
            
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();