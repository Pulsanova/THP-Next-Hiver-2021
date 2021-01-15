const quickSort = (toSort, type = 'recursive') => {
    let comparisons = 0;

    const swap = (list, a, b) => {
        [list[a], list[b]] = [list[b], list[a]];
    };

    const pivot = (data, start = 0) => {
        const pivotValue = data[start];

        let currentIndex = start;
        for (let index = start; index < data.length; index++) {
            const value = data[index];
            comparisons += 1;
            if (value < pivotValue) {
                currentIndex += 1;
                swap(data, currentIndex, index);
            }
        };

        swap(data, start, currentIndex);

        return currentIndex;
    }

    const sortIterative = () => {
        toSort = ['TODO'];
    };

    const sortRecursive = (data, start = 0, end = data.length) => {
        if (start >= end) {
            return;
        }

        const pivotIndex = pivot(data, start);

        sortRecursive(data, start, pivotIndex);
        sortRecursive(data, pivotIndex + 1, end);
    };

    if (type === 'recursive') {
        sortRecursive(toSort);
    } else {
        sortIterative(toSort);
    }

    console.log(`Tri rapide ${type} (${comparisons} comparaisons) :`);
    console.log(toSort);
};

module.exports = quickSort;
