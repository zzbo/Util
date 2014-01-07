'use strict';

/**
 * 操作url的hash方法集   
 * version: 2013121901
 * author: walkingant@gmail.com
 */

var hash = (function () {  
    //存储hash的对象
    var hashTable = {};
    /**
     * 获取hash，并写到hashTable对象
     * 检测hash是否带有buynum，如果有则自动加入购物车
     * http://www.test.com/index.html#buynum=2 -> ajaxAdd(2)
     * 因此FF会对url进行encodeURI，故不使用location.hash
     */
    function _getHash () {
        var href = decodeURIComponent(location.href);
        var match = href.match(/#(.*)$/);
        if (!match) {
            hashTable = {};
            return;
        }
        var splits = match[1].split('&');
        var s;
        while(splits.length > 0) {
            s = splits.shift().split('=');
            hashTable[s[0]] = s[1];
        }
    }
    /**
     * 合并hashTable为字符串，并且添加到url上
     */
    function _joinHash () {
        var hashStr = [];
        for (var i in hashTable) {
            var s= i + '=' + hashTable[i];
            hashStr.push(s);
        }
        window.location.hash = hashStr.join('&');
    }
    /**
     * 增加一个hash
     * @param {type} hashName  [要增加的key]
     * @param {type} hashValue [要增加的值]
     * @retrun {Object}        [hash]
     */
    function addHash (hashName, hashValue) {
        _getHash();
        hashTable[hashName] = hashValue;
        _joinHash();
        return this;
    }
    /**
     * 获取hash值
     * @param  {String} hashName [要获取hash值对应的key]
     * @return {String}          [返回对应key的值]
     */
    function getHash (hashName) {
        _getHash();
        return hashTable[hashName];
    }
    /**
     * 删除hash值
     * @param  {String} hashName [要删除的hash的key]
     * @return {Object}          [hash]
     */
    function removeHash (hashName) {
        if (hashTable[hashName]) {
            delete hashTable[hashName];
            _joinHash();
        }
        return this;
    }

    //返回方法集
    return {
        add : addHash,
        get : getHash,
        remove : removeHash,
        getTable : hashTable
    }
})();

module.exports = hash;
