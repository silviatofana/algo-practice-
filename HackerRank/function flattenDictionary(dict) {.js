function flattenDictionary(dict) {
    // your code goes here
    let res = {}
    helper(dict, "", res);
    return res;
    }

    