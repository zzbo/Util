function startsWith (original, str) {
    if (typeof String.prototype.startsWith != 'function') 
        return original.slice(0, str.length) == str;
    }
    else {
        return original.startsWith(original);
    }
}

function endsWith (original, str) {
    if (typeof String.prototype.endsWith != 'function') 
        return original.slice(-str.length) == str;
    }
    else {
        return original.endsWith(original);
    }
}

var methods = {
    startsWith : startsWith,
    endsWith : endsWith
}

module.exports = methods;
