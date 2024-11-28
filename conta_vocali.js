const string = process.argv.slice(2).join(" ");

/**
 * funzione che conta quante vocali ha una parola o una frase
 * @param {string} item
 * @returns {number}
 */
const contaVocali = (item) => {
    let counter = 0;
    item = item.toLowerCase();
    for(let i = 0; i < item.length; i++){
        const curItem = item[i];
        if(curItem === 'a' || curItem === 'e' || curItem === 'i' || curItem === 'o' || curItem === 'u'){
            counter++;
        }
    }
    return counter;
}

if(isNaN(string)){
    console.log(`Le vocali nella parola/frase ${string} sono ${contaVocali(string)}`);
}else{
    console.log("Inserisci una parola o una frase");
}