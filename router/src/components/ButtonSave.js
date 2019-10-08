import React, {Component, Fragment} from 'react';
import axios from "axios";

// on crée un component a part en copiant le state etc car cela pose un probleme avec le array.map de App.js

export class ButtonSave extends Component {
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


    handleChange = event => {
        const item = {...this.state.item}// Je copie mon tableau (fonction mutable)
        const title=event.target.value;
        item.title = title
        this.setState({item:{title}}); // Déstructuration de title: title
    };

    handleCreate = async () => {
        const title=this.state.item.title;
        await axios.post('http://localhost:4000/todos/', {title}); // await signifie qu'on attend que la requete est fini de faire sa life
    };

    render() {
        return (
            <Fragment>
                <form>
                    <label>Title: </label>
                    <input type="text" onChange={this.handleChange}/>&nbsp; /* Toujours mettre un onChange sur un input pour capter les changements*/
                    <button type="submit" onClick={this.handleCreate}>Create</button>
                </form>
            </Fragment>
        );
    }
}

