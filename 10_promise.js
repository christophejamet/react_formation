
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise(resolve => setTimeout(resolve, 2000));

//console.log("start");
//console.log(sleep().then(() => console.log("end")));

module.exports = {sleep};