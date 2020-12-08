import React, { useEffect } from 'react';
// import ComponentE from './ComponentE';
import UserContext from './userContext';

const ComponentC = () => {
    const userContext = React.useContext(UserContext);
    const { loading, setLoading, clearLoading } = userContext;
    useEffect(() => {
        console.log(loading);
        // eslint-disable-next-line
    }, [loading]);

    return (
        <div>
            <button onClick={setLoading}>click</button>
            <button onClick={clearLoading}>click</button>
        </div>
    );
};

export default ComponentC;
