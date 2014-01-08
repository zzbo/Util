'use strict';

function isset (value) { 
    try {
        return typeof eval(value) != 'undefined';
    } catch (e) {
        return false
    }
    return true;
}

module.exports = isset;
