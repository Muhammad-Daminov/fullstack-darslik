async function promise(age) {
    try{
        if(age > 18){
            console.log("yosh tog'ri keladi")
        } else {
            throw new Error("yosh 18 dan kichik");
        }
    } catch(err) {
        console.log(err.message);
    }
}

await promise(17);


