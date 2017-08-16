import React, { Component } from 'react';

class MyComponent extends Component {

    constructor() {
        super();
        this.state= {name: 'Say my name'};
        setInterval(
            () => {
                this.setState({name: 'Heisenberg'})
            },
            2000
        );
    }

    render() {
        return (
            <h1>{this.state.name}</h1>
        );
    }
}

export default MyComponent;
