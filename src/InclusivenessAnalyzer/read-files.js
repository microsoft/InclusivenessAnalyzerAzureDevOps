const core = require('azure-pipelines-task-lib/task');

const glob = require("glob")

const EXCLUSIONS = [".git", "node_modules"];

function getFilesFromDirectory(directoryPath) {

    // `exclude-from-scan` input defined in action metadata file
    var excludeFromScan = core.getInput('excludeFromScan');
    if(excludeFromScan === undefined){
        excludeFromScan = '';
    }
    //const excludeFromScan = "**/*.ps1,**/*.mp4";
    core.debug(`Excluding file patterns : ${excludeFromScan}`);
    
    var exclusions = EXCLUSIONS.concat(excludeFromScan.split(','));
    core.debug(directoryPath);
    
    var filesArray = glob.sync(`${directoryPath}/**/*`, { "nodir": true, "ignore": exclusions });

    //core.debug(filesArray);
    return filesArray;
}

module.exports = getFilesFromDirectory;