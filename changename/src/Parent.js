import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Child } from './index';

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

    }

    changeName = newName => {
        this.setState({
            name: newName
        });
    };

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);