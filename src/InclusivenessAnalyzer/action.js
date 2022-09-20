const core = require('azure-pipelines-task-lib/task');
const getNonInclusiveTerms = require("./non-inclusive-terms");
const getFilesFromDirectory = require("./read-files");
const checkFileForPhrase = require("./file-content");
const fs = require('fs');

async function run() {
    try {
        var dir = core.getVariable('System.DefaultWorkingDirectory');

        if(dir === undefined){ //Could be running locally, try reading from env.
            dir = process.env.GITHUB_WORKSPACE;
        }
        
        const failStep = core.getInput('failStep');

        var excludeTerms = core.getInput('excludeterms');
        if(excludeTerms === undefined){
            excludeTerms = '';
        }
        console.log(`Excluding terms: ${excludeTerms}`);
        var exclusions = excludeTerms.split(',');

        core.debug('searching non inclusive words under',dir);

        const nonInclusiveTerms = await getNonInclusiveTerms();
        // list all files in the directory
        var filenames = getFilesFromDirectory(dir);
        var passed = true;

        filenames.forEach(filename => {
            core.debug(`Scanning file: ${filename}`);
            //core.startGroup(`Scanning file: ${filename}`);
      
            nonInclusiveTerms.forEach(phrase => {
              if (!exclusions.includes(phrase.term)) {
                var lines = checkFileForPhrase(filename, phrase.term);
      
                if (lines.length > 0) {
                  // The Action should fail
                  passed = false;
      
                  core.warning(`Found the term '${phrase.term}', consider using alternatives: ${phrase.alternatives}`);
                  lines.forEach(line => {
                    core.warning(`\t[Line ${line.number}] ${line.content}`, { line: line.number });
                    //core.notice({ file: line.file, line: line.number, title: `Found the term '${phrase.term}', consider using alternatives: ${phrase.alternatives}` })
                  });
                }
              }
              else
                core.debug(`Skipping the term '${phrase.term}'`);
            });
      
            //core.endGroup();
          });
        
        if (!passed)
        {
            core.setResult(core.TaskResult.SucceededWithIssues, 'Found non inclusive terms in some files.');
        }
            
    }
    catch (err) {
        let message = "An error occurred.";

        if (typeof err === "string") {
            message = err.toUpperCase() // works, `e` narrowed to string
        } else if (err instanceof Error) {
            message = err.message // works, `e` narrowed to Error
        }
        core.setResult(core.TaskResult.Failed, message);
    }
}

run();