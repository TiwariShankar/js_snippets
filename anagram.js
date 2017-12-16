function checkAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let cntChr = {};
    for(let i=0; i<str1.length; i++){
        if (str1[i] in cntChr) {
            cntChr[str1[i]] += 1;
        }else{
            cntChr[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] in cntChr){
            cntChr[str2[i]] -= 1;
        }
    }
    for(ch in cntChr){
        if (cntChr[ch] > 0) {
            console.log("not a anagram");
            return false;
        }
    }

    console.log("anagram");
    return true;
}

console.log(checkAnagram('dell', 'ledl'));