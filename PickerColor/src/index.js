import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Resultat} from './resultat'

class Carre extends Component {
    constructor(props){
        super(props)
        this.state = {
           className: localStorage.getItem('className'),
            color: localStorage.getItem('className')

        }
    }

    changeColor = color => {
        this.setState({className: color, color})
        localStorage.setItem('className', color)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div onClick={() => this.changeColor('bleu')} className="bleu">
                    </div>
                    <div onClick={() => this.changeColor('rouge')} className="rouge">
                    </div>
                </div>
                <div className="row">
                    <div onClick={() => this.changeColor('vert')} className="vert">
                    </div>
                    <div onClick={() => this.changeColor('jaune')} className="jaune">
                    </div>
                </div>
                <Resultat className={this.state.className} color={this.state.color} />
            </div>

        );
    }
}

ReactDOM.render(<Carre />, document.getElementById('root'));