import React, { useContext } from 'react';
import './App.css';
import UserContext from './components/userContext';
import State from './components/state';
import ComponentC from './components/ComponentC';
import Forms from './components/Forms';
import MyTable from './components/MyTable';

function App() {
    return (
        <State>
            <div className='App'>
                <Forms />
                <MyTable />
            </div>
        </State>
    );
}

export default App;
