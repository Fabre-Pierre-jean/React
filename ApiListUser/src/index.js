import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        try {
            const { data } = await axios.get(url);
            this.setState({ user: data });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <ul>
                    {this.state.user.map(x => (
                        <li>{x.username}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
