import React, {Component, Fragment} from 'react';
import axios from 'axios';

class TodoId extends Component {
    state = {
        item : {}
    };

    getItem = async () => {
            const { data } = await axios.get(`http://localhost:4000/todos/${this.props.match.params.id}`); // IMPORTANT il s'agit de tick et non pas d'apostrophes
            this.setState({ item: data });
    };

    componentDidMount() {
       this.getItem();
    }

    componentDidUpdate() {
        const sentence = this.state.item.title
        const text = "a"
        sentence.includes(text) ? console.log("il y a un a") : console.log("il n'y a pas de a")
    }

    handleChange =(event)=> {
        const title=event.target.value;
        this.setState({item:{title}});
    };

    handleDelete = async () => {
           await axios.delete(`http://localhost:4000/todos/${this.props.match.params.id}`);
           this.props.history.goBack()
    };

    handleModif = async () => {
        const id = this.props.match.params.id;
        const title=this.state.item.title;
        await axios.post('http://localhost:4000/todos/', {title, id});
        this.props.history.goBack()
    };

    render() {
        return (
            <Fragment>
                    <label>Title: </label>
                    <input type="text" defaultValue={this.state.item.title} onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.handleModif} type="submit" onFocus={this.handleModif}>Save</button>
                    <button onClick={this.handleDelete} type="submit">Delete</button>
            </Fragment>
        );
    }
}

export default TodoId;