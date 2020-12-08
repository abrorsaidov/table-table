import React, { Component } from 'react';
//import { UserConsumer } from './userContext';

export class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {user => {
                    return <div>Hello {user}</div>;
                }}
            </UserConsumer>
        );
    }
}

export default ComponentF;
