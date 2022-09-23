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

module.exports = { read, readBoolean };