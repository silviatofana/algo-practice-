function isMatch(s, p) {
    let sIndex = 0, pIndex = 0, starIndex = -1, matchIndex = 0;
    
    while (sIndex < s.length) {
        if (pIndex < p.length && (p.charAt(pIndex) === '?' || p.charAt(pIndex) === s.charAt(sIndex))) {
            sIndex++;
            pIndex++;
        } else if (pIndex < p.length && p.charAt(pIndex) === '*') {
            starIndex = pIndex;
            matchIndex = sIndex;
            pIndex++;
        } else if (starIndex !== -1) {
            pIndex = starIndex + 1;
            matchIndex++;
            sIndex = matchIndex;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p.charAt(pIndex) === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
}
