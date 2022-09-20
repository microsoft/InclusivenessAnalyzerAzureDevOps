import { match } from "assert";

const fs = require('fs');

 type Match = {
    file: string,
    number: Number,
    content: string,
};

function checkFileForPhrase(file: string, phrase: string) {

    var lines: Match [] = [];
    var content = fs.readFileSync(file, 'utf-8').toString().split("\n");
    content.forEach((line: string, index: Number) => {
        if(line.match(phrase)) {
            var match:Match = {
                file: file,
                number: index,
                content: line
            }
            lines.push(match);
        }
    });
    
    return lines;
}

module.exports = checkFileForPhrase;