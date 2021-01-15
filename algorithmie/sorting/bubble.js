const bubbleSort = (toSort, type = 'recursive') => {
    let comparisons = 0;

    const swap = (list, a, b) => {
        [list[a], list[b]] = [list[b], list[a]];
    };

    const sortIterative = (data) => {
        let sorted = false;
        while (!sorted) {
            sorted = true;
            data.forEach((value, index) => {
                const nextValue = data[index + 1];
                comparisons += 1;
                if (value > nextValue) {
                    swap(data, index, index + 1);
                    sorted = false;
                }
            });
        }

        return data;
    }

    const sortRecursive = (data, length = data.length) => {
        if (length <= 1) {
            return;
        }

        sortRecursive(data, length - 1);

        data.forEach((value, index) => {
            if (index === length - 1) {
                return;
            }

            const nextValue = data[index + 1];
            comparisons += 1;
            if (value > nextValue) {
                swap(data, index, index + 1);
            }
        });
    }

    if (type === 'recursive') {
        sortRecursive(toSort);
    } else {
        sortIterative(toSort);
    }

    console.log(`Tri à bulle ${type} (${comparisons} comparaisons) :`);
    console.log(toSort);
};

module.exports = bubbleSort;
