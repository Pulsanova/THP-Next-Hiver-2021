const insertSort = (toSort, type = 'recursive') => {
    let comparisons = 0;

    const sortIterative = (data) => {
        data.forEach((value, index) => {
            let insertIndex = index - 1;
            let processing = true;
            while (processing) {
                processing = false;
                comparisons += 1;
                if (insertIndex >= 0 && value < data[insertIndex]) {
                    data[insertIndex + 1] = data[insertIndex];
                    insertIndex -= 1;
                    processing = true;
                }
            }
            data[insertIndex + 1] = value;
        });

        return data;
    }

    const sortRecursive = (data, length = data.length) => {
        if (length <= 1) {
            return;
        }

        sortRecursive(data, length - 1);

        const value = data[length - 1];
        let insertIndex = length - 2;
        let processing = true;
        while (processing) {
            processing = false;
            comparisons += 1;
            if (insertIndex >= 0 && value < data[insertIndex]) {
                data[insertIndex + 1] = data[insertIndex];
                insertIndex -= 1;
                processing = true;
            }
        }
        data[insertIndex + 1] = value;
    }

    if (type === 'recursive') {
        sortRecursive(toSort);
    } else {
        sortIterative(toSort);
    }

    console.log(`Tri par insertion ${type} (${comparisons} comparaisons) :`);
    console.log(toSort);
};

module.exports = insertSort;
