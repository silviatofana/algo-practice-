function validateIP(ip) {
    var regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return regex.test(ip);
}