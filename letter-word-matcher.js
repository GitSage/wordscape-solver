let fs = require('fs');
// let dict = fs.readFileSync('google-10000-english.txt').toString().split("\n");
let dict = fs.readFileSync('words.txt').toString().split("\n");

function diff(a, b) {
    return b.filter(function(i) {return a.indexOf(i) < 0;});
};

module.exports = function(chars, mask) {
    var notIt = [];
    for(let i = 0; i < dict.length; i++)
    {
        if(wordMatches(chars, mask, dict[i].toLowerCase().trim()))
        {
            notIt.push(dict[i]);   
        }
    }

    return notIt;
}

function wordMatches(chars, mask, word) {
    if(word.length < 3) {
        return false;
    }
    if(mask) {
        if(word.length !== mask.length) {
            return false;
        }
        for(let i = 0; i < word.length; i++) {
            if(mask.charAt(i) !== '_' && mask[i] !== word.charAt(i)) {
                return false;
            }
        }
    }
    let matches = true;
    for(let j = 0; j < word.length; j++) {
        if(!chars.includes(word.charAt(j))) {
            matches = false;
        }
        else {
            chars = chars.replace(word.charAt(j), '');
        }
    }
    return matches;
}
