/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant le fichier de la liste des nombres (par ex. "subject2.txt")
 * comme argument. Exemple :
 *
 *     node project/exo6.js subject2.txt
 *
 */
const data = require('./parseData');
let comparisons = 0;

const exo6 = (buildings) => {
    let lastMaxStages = 0;
    return buildings.reverse().filter((stages) => {
        comparisons += 1;
        if (stages > lastMaxStages) {
            lastMaxStages = stages;
            return true;
        }
        return false;
    }).reverse();
}

const result = exo6(data);
console.log(result, `(${comparisons} comparisons)`);
