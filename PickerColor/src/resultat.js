import React, {Component} from 'react';
import './index.css';

export class Resultat extends Component{
    render() {
        return (
            <div className={this.props.className}>
                <p>La couleur choisi est <strong>{this.props.color}</strong></p>
            </div>
        )
    }
}