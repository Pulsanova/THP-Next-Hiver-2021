/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant le fichier de la liste des nombres (par ex. "subject2.txt")
 * comme argument. Exemple :
 *
 *     node project/exo4.js subject2.txt
 *
 */
const data = require('./parseData');
let comparisons = 0;

const exo4 = (buildings) => {
    const lastBuilding = [...buildings].pop();
    const goodBuildings = [lastBuilding];

    buildings.reverse().forEach((stages) => {
        comparisons += 1;
        if (stages > Math.max(...goodBuildings)) {
            goodBuildings.push(stages);
        }
    });

    return goodBuildings.reverse();
}

const result = exo4(data);
console.log(result, `(${comparisons} comparisons)`);
