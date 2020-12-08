import React, { useReducer } from 'react';
import reducer from './reducer';
import UserContext from './userContext';

const State = props => {
    const initialState = {
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const setLoading = () => {
        dispatch({
            type: 'LOADING',
        });
    };

    const clearLoading = () => {
        dispatch({
            type: 'CLEAR_LOADING',
        });
    };

    return (
        <UserContext.Provider
            value={{ loading: state.loading, setLoading, clearLoading }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default State;
