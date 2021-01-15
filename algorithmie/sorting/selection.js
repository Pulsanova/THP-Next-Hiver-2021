const selectSort = (toSort, type = 'recursive') => {
    let comparisons = 0;

    const swap = (list, a, b) => {
        [list[a], list[b]] = [list[b], list[a]];
    };

    const findSmallestIndex = (data, currentIndex, lastIndex = data.length - 1) => {
        if (currentIndex === lastIndex) {
            return currentIndex;
        }

        const smallestIndex = findSmallestIndex(data, currentIndex + 1, lastIndex);
        comparisons += 1;
        return (data[currentIndex] < data[smallestIndex]) ? currentIndex : smallestIndex;
    }

    const sortIterative = (data) => {
        data.forEach((currentValue, currentIndex) => {
            const smallestIndex = findSmallestIndex(data, currentIndex);
            comparisons += 1;
            if (smallestIndex > 0 && smallestIndex !== currentIndex) {
                swap(data, currentIndex, smallestIndex);
            }
        });
    }

    const sortRecursive = (data, length = data.length, currentIndex = 0) => {
        if (currentIndex === length) {
            return;
        }

        const smallestIndex = findSmallestIndex(data, currentIndex);
        comparisons += 1;
        if (smallestIndex > 0 && smallestIndex !== currentIndex) {
            swap(data, currentIndex, smallestIndex);
        }

        sortRecursive(data, length, currentIndex + 1);
    }

    if (type === 'recursive') {
        sortRecursive(toSort);
    } else {
        sortIterative(toSort);
    }

    console.log(`Tri par sélection ${type} (${comparisons} comparaisons) :`);
    console.log(toSort);
};

module.exports = selectSort;
