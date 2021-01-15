/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant deux arguments :
 *   - le fichier de la liste des nombres (par ex. "subject1.txt")
 *   - le nombre "k" (la cible du check)
 *
 * Exemple :
 *
 *     node project/exo3.js subject1.txt 17
 *
 */
const data = require('./parseData');
const target = Number(process.argv[3]);
let comparisons = 0;

if (!target) {
    throw new Error('Please provide a valid target number.')
}

const exo3 = (numbers, resultTarget) => {
    const cacheObject = {};

    // First loop
	numbers.forEach((value1, index1) => {
		cacheObject[value1] = index1;
	});

    // Second loop
    return numbers.some((value2, index2) => {
        const diff = resultTarget - value2;
        comparisons += 1;
		return (cacheObject.hasOwnProperty(diff) && cacheObject[diff] !== index2);
	});
}

const result = exo3(data, target);
console.log(result, `(${comparisons} comparisons)`);
