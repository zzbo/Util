function parseURI(uri){
    var tag = document.createElement('a');
    var res = {};
    tag.href = uri;
    res.protocol = tag.protocol;
    res.hostname = tag.hostname;
    res.port = tag.port;
    res.pathname = tag.pathname;
    res.search = tag.search;
    res.hash = tag.hash;
    res.host = tag.host;
    res.domain = tag.hostname
    return res;
}

module.exports = parseURI;
