import React, { Component } from 'react';


export class Result extends Component {
    render() {
        return (
            <div><p>Ton nom est {this.props.name}, ton prenom est {this.props.firstName}</p></div>)
    }
}

