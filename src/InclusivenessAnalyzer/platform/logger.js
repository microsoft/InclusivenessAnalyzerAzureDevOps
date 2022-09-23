const core = require('azure-pipelines-task-lib/task');

function info(message, file = '', line = 0, column = 0, title = "") {
    //Azure DevOps does not have a .notice equivalent for informational messages so we'll use warning for now.
    if (file === '')
        core.warning(message);
    else
        core.warning(message, { file: file, startLine: line.toString(), column: column.toString(), title: title });
}

function warn(message, file = '', line = 0, column = 0, title = "") {
    if (file === '')
        core.warning(message);
    else
        core.warning(message, { file: file, startLine: line.toString(), column: column.toString(), title: title });
}

function debug(message, file = '', line = 0, column = 0, title = "") {
    if (file === '')
        core.debug(message);
    else
        core.debug(message, { file: file, startLine: line.toString(), column: column.toString(), title: title });
}

function error(message, file = '', line = 0, column = 0, title = "") {
    if (file === '')
        core.error(message);
    else
        core.error(message, { file: file, startLine: line.toString(), column: column.toString(), title: title });
}

function fail(message) {
    core.setResult(core.TaskResult.Failed, message);
}

module.exports = { info, warn, debug, fail };