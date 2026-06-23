function isPalindrom(num){
    return (String(num)) === ((String(num)).split('').reverse().join('')) ? true : false;
}

console.log(isPalindrom(121));