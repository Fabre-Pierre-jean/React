import React from "react";
import ReactDOM from "react-dom";
import {Result} from "./result";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("name"),
            firstName: localStorage.getItem("firstName"),
            sex: localStorage.getItem("sex"),
            souvenir: localStorage.getItem("souvenir")
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        const { name, firstName, sex, souvenir } = this.state;
        localStorage.setItem("name", souvenir ? name : "");
        localStorage.setItem("firstName", souvenir ? firstName : "");
        localStorage.setItem("sex", souvenir ? sex : "");
        localStorage.setItem("souvenir", souvenir);
        };

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>name </label>
                    <input
                        name="name"
                        type="string"
                        defaultValue={this.state.name}
                        onChange={this.handleInputChange}
                    />
                <br />
                <label>firstName </label>
                    <input
                        name="firstName"
                        type="string"
                        defaultValue={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                <br/>
                <br />
                <label>Es-tu sexué?</label>
                    <input
                        name="sex"
                        type="radio"
                        defaultChecked={this.state.sex}
                        onChange={this.handleInputChange}
                    />
                <br />
                    <input
                        name="souvenir"
                        checked={this.state.souvenir}
                        onChange={this.handleInputChange}
                        type="checkbox"
                    />
                <label>Se souvenir de moi</label>


                <br />
                <input type="submit" value="Submit" />
                <Result name={localStorage.getItem("name")} firstName={localStorage.getItem("firstName")}/>
            </form>
        );
    }
}
ReactDOM.render(<Form />, document.getElementById("root"));
