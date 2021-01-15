/**
 * Script à lancer avec `node` dans un terminal,
 * en utilisant le fichier `data.txt` en argument du script, comme ceci :
 *
 * node sorting/run.js data.txt
 *
 */
const fs = require('fs');

const bubbleSort = require('./bubble');
const insertSort = require('./insertion');
const selectSort = require('./selection');
const quickSort = require('./rapid');

const fileName = process.argv[2];

try {
    if (!fileName) {
        throw new Error("Please provide a file to read.");
    }

    const data = fs.readFileSync(fileName, 'utf8');

    const numbers = data.split(' ')
        .filter((num) => num.length > 0 && !isNaN(num))
        .map((num) => Number.parseInt(num));

    bubbleSort([...numbers], 'iterative');
    bubbleSort([...numbers], 'recursive');
    console.log(' ');
    insertSort([...numbers], 'iterative');
    insertSort([...numbers], 'recursive');
    console.log(' ');
    selectSort([...numbers], 'iterative');
    selectSort([...numbers], 'recursive');
    console.log(' ');
    quickSort([...numbers], 'iterative');
    quickSort([...numbers], 'recursive');
} catch (error) {
    console.error(error.message);
}


