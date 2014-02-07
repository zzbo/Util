function format(str, arr){
    return str.replace(/%(\d+)/g, function(_, m) {
        return arr[--m];
    });
}

module.exports = format;

/*
usage:
require('format.js');
var text = 'Hello %1. Are you %2 today?';
var values = ['guy','busy'];
 
var result = format(text, values);
 
console.log(result); //=> "Hello Mike. Are you busy today?"
*/
