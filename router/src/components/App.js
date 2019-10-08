import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import {ButtonSave} from './ButtonSave'


class Home extends Component {
    state = {
        item : []
    };

    componentDidMount() {
        fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then(item => {
                this.setState({item})
            })
    }

    render() {
        return (
                <Fragment>
                    <ul>
                        {this.state.item.map(x => ([
                            <li>
                               <Link to={`/todos/${x.id}`}>{x.title || x.id}</Link>
                            </li>
                            ]
                        ))}
                    </ul>
                    <ButtonSave/>
                </Fragment>
        );
    }
}

export default Home;