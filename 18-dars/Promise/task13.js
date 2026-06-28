async function serverMalumotlar() {
    return [{name : 'eshmat', age : 21}, {name: 'gishmat', age : 18}]
}



const users = await serverMalumotlar();
for(let el of users){
    console.log(el.name);
}