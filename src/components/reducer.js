export default (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'CLEAR_LOADING':
            return {
                ...state,
                loading: false,
            };
    }
};
