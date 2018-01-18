var matchString = require('./letter-word-matcher');

let chars = 'takein';
let mask = '_a___';

if(validateMask(chars, mask)) {
    let results = matchString(chars, mask);    
    for(result of results) {
        console.log(result);
    }
}

function validateMask(chars, mask) {
    if(!mask) {
        console.log("No mask, continuing")
        return true;
    }
    if(mask.length > chars.length) {
        console.log("Mask length is incorrect, giving up");
        return false;
    }
    for(let i = 0; i < mask.length; i++) {
        if(mask.charAt(i) !== '_' && !chars.includes(mask.charAt(i))) {
            console.log("Mask doesn't match char because of char " + mask.charAt(i) + ", giving up");
            return false;
        }
        else {
            chars = chars.replace(mask.charAt(i), '');
        }
    }
    return true;
}