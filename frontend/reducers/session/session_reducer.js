const sessionReducer = (prevState={id: null}, action) => {
    Object.freeze(prevState);
    switch(action.type) {
        default:
            return prevState;
    }
};

export default sessionReducer;