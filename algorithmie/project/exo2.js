/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant le fichier de la liste des nombres (par ex. "subject2.txt")
 * comme argument. Exemple :
 *
 *     node project/exo2.js subject2.txt
 *
 */
const data = require('./parseData');
let comparisons = 0;

const exo2 = (buildings) => {
    const goodBuildings = [];

    buildings.reverse().forEach((maxStages, indexReverse) => {
        const hasNiceView = buildings.some((stages, index) => {
            comparisons += 1;
            return (index >= indexReverse && stages > maxStages);
        });

        if (hasNiceView) {
            goodBuildings.push(maxStages);
        }
    });

    return goodBuildings.reverse();
}

const result = exo2(data);
console.log(result, `(${comparisons} comparisons)`);
