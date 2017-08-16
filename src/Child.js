import React, { Component } from 'react';

class Child extends Component {

    name = 'akshay';

    constructor() {
        super();
    }

    handleChangeEvent() {
        this.props.onNameChange('Heisenberg')
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.handleChangeEvent.bind(this)}> update </button>
            </div>
        );
    }
}

export default Child;
