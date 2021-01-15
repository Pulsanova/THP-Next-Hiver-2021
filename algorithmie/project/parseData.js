const fs = require('fs');
const { exit } = require('process');

const fileName = process.argv[2];

let data = [];

try {
    if (!fileName) {
        throw new Error("Please provide a file to read.");
    }

    const content = fs.readFileSync(fileName, 'utf8');

    data = content.split(' ')
        .filter((num) => num.length > 0 && !isNaN(num))
        .map((num) => Number.parseInt(num));
} catch (error) {
    console.error(error.message);
    exit(1);
}

module.exports = data;
