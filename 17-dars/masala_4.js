function anagramma(text1, text2) {
    return text1 === text2.split("").reverse().join("");
}



console.log(anagramma("tom", "mot")); 
console.log(anagramma("olma", "lamo")); 
console.log(anagramma("kun", "tun")); 
