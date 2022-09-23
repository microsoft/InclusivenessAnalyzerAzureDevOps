const core = require('azure-pipelines-task-lib/task');
const params = require("./params");

// This module will contain platform specific methods that are either specific to GitHub or Azure DevOps

function getWorkingDirectory(){
    var dir = core.getVariable('System.DefaultWorkingDirectory');

    if(dir === undefined){ //Could be running locally, try reading from env.
        dir = process.env.GITHUB_WORKSPACE;
    }
    return dir;
}

function equalsIgnoringCase(text, other) {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}

// Azure DevOps supports three states. This method allows custom logic for ADO.
function logBuildFailure(message){
    const buildStatusOnNonInclusiveTerm = params.read('buildStatusOnNonInclusiveTerm');

    if(buildStatusOnNonInclusiveTerm === undefined){
        buildStatusOnNonInclusiveTerm === 'warning';
    }
    if (equalsIgnoringCase(buildStatusOnNonInclusiveTerm, 'warning')) {
        core.setResult(core.TaskResult.SucceededWithIssues, message);
    }
    else if (equalsIgnoringCase(buildStatusOnNonInclusiveTerm, 'failed')) {
        core.setResult(core.TaskResult.Failed, message);
    }
}

module.exports = { getWorkingDirectory, logBuildFailure };