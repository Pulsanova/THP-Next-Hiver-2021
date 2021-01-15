/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant deux arguments :
 *   - le fichier de la liste des nombres (par ex. "subject1.txt")
 *   - le nombre "k" (la cible du check)
 *
 * Exemple :
 *
 *     node project/exo5.js subject1.txt 17
 *
 */
const data = require('./parseData');
const target = Number(process.argv[3]);
let comparisons = 0;

if (!target) {
    throw new Error('Please provide a valid target number.')
}

const exo5 = (numbers, resultTarget) => {
    const numbersMap = new Map();

    return numbers.some((value, index) => {
        comparisons += 1;
        if (numbersMap.has(resultTarget - value)) {
            return true;
        }
        numbersMap.set(value, index);
        return false;
    });
}

const result = exo5(data, target);
console.log(result, `(${comparisons} comparisons)`);
