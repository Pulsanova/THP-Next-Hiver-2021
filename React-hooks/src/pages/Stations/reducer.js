const selectionReducer = (prevState, payload) => {
    const { action, identifier } = payload;

    switch (action) {
        case 'add':
            return [...prevState, identifier];
        case 'remove':
            if (prevState.includes(identifier)) {
                return [...prevState.filter(
                    (item) => item !== identifier
                )];
            }
            return [...prevState];
        default:
            throw new Error('Action not supported');
    }
};

export default selectionReducer;
