const {sleep} = require("./10_promise");
const axios = require("axios");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = sleep().then(() => console.log("end"));

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (callback) => {
    console.log("start usingAwait")
    await sleep();
    callback;
    console.log("end usingAwait")};

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
//const axios = require("axios");

const apiResponse = async (url) => await axios.get(url).then(res => res.data);


//console.log(usingThen);
//console.log(usingAwait(console.log("test")));
console.log(apiResponse("http://jsonplaceholder.typicode.com/todos/1")
    .then(res => console.log("title :" + res.title))
    .catch(err => console.log(err)));



module.exports = {usingThen, usingAwait, apiResponse};