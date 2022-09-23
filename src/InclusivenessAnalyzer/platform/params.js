const core = require('azure-pipelines-task-lib/task');

function read(name) {
    var value = core.getInput(name);
    if(value === undefined){
        value = '';
    }
    return value;
}

function readBoolean(name) {
    return core.getBoolInput(name);
}

function getWorkingDirectory(){
    var dir = core.getVariable('System.DefaultWorkingDirectory');

    if(dir === undefined){ //Could be running locally, try reading from env.
        dir = process.env.GITHUB_WORKSPACE;
    }
    return dir;
}

module.exports = { read, readBoolean, getWorkingDirectory };