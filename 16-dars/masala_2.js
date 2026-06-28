function  isAnagram(text1, text2) {
    return text1.length === text2.length ? text1.toLowerCase().split("").sort().join("") === text2.toLowerCase().split("").sort().join("") : false;
}

console.log(isAnagram('listen', 'teNsil'));