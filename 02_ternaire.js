
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : b;
}

console.log(ternaire(1,2));
console.log(ternaire(2,1));
console.log(ternaire(1,1));

module.exports = ternaire;