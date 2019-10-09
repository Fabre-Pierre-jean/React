import React, {Component, Fragment} from 'react';
import Membre from './components/Membre';
import Membre2 from './components/Membre2';
import Button from './components/Button';


const famille = {
    membre1: {
        nom: "Pj",
        age: 36
    },
    membre2: {
        nom: "Pj 2",
        age: 47
    },
    membre3: {
        nom: "Pj 3",
        age: 58
    },
    membre4: {
        nom: "Pj 4",
        age: 69
    }
};

const num = 2 /* je défini une constante ici pour n'avoir à changer qu'une seul fois la valeur qui sera répercuté sur le nom de mon
                button dans mon component Button, ainsi que la valeur qui sera incrémenter*/

class App extends Component {
    state = {
        famille,
        isShow: false,
    };

    handleChange = (event, id) => {
        const famille = {...this.state.famille} // on copie le state dans une const famille, !!! TJS travailler sur une copie du state !!!!
        const nom = event.target.value
        famille[id].nom = nom
        this.setState({famille})
    }

    handleChange2 = event => {
        const nom = event.target.value
        famille.membre1.nom = nom
        this.setState({famille})
    }

    handleClick = num => {
        const famille = {...this.state.famille} // on copie le state dans une const famille, !!! TJS travailler sur une copie du state !!!!
        famille.membre1.age += num
        this.setState({ famille })
    }

    handleShow =() => {
        const isShow = !this.state.isShow //permet de faire un systeme de toggle sur la valeur, un click c'est true, un 2e click c'est false
        this.setState({isShow})
     }

    hideName = id => {
        const famille = {...this.state.famille}
        famille[id].nom = "Inconnu"
        this.setState({famille})
    }

    render() {
        const { famille, isShow } = this.state // Déstructuration pour par exemple const famille = this.state.famille

        // il existe deux façon de faire pour effectuer des conditions d'execution/affichage, la 1ere est le ternaire qu'on voit avec la valeur Montrer/cacher et la 2eme est celle ci qui est mieux pour rendre plusieurs éléments ou plusieurs elseif etc
        let showDetail = null
        let showIsOlder = null

        //1er jet, on doit pouvoir factoriser ça, surtout avec lifecycle, je pense à un petit componentDidMount
        if (isShow && famille.membre1.age < famille.membre4.age){
            showDetail = (
                <Fragment>
                <strong>Je suis le plus vieux</strong>
                <br />
                </Fragment>
            )
            showIsOlder = (
                <Fragment>
                    <strong>Je suis pas le plus vieux, fais moi vieillir</strong>
                </Fragment>
            )

        }else if (isShow && famille.membre1.age > famille.membre4.age) {
            showDetail = (
                <Fragment>
                    <strong>Je suis plus le plus vieux</strong>
                    <br />
                </Fragment>
            )
            showIsOlder = (
                <Fragment>
                    <strong>Je suis le plus vieux</strong>
                </Fragment>
            )
        }

        /* on prends notre state famille qui est un objet et on en fait un tableau associatif avec comme clé membreX
        ensuite on fait un map(foreach loop)*/
        const liste = Object.keys(famille)
            .map( membre =>
                <Membre
                    key={famille[membre].age}
                    handleChange={(event, id) => this.handleChange(event, membre)}
                    hideName={() => this.hideName(membre)}
                    nom={famille[membre].nom}
                    age={famille[membre].age}/>
                )

        return (
            <div className="container text-center my-5">
                <h1 className="h1">Liste dynamique</h1>
                {liste}

                <h1 className="h1">Liste statique</h1>
                <input value={famille.membre1.nom} onChange={this.handleChange2} type="text"/>
                <Membre2
                    nom={famille.membre1.nom}
                    age={famille.membre1.age}>
                    { showIsOlder }
                </Membre2>
                <Membre2
                    nom={famille.membre2.nom}
                    age={famille.membre2.age}/>
                <Membre2
                    nom={famille.membre3.nom}
                    age={famille.membre3.age}/>
                <Membre2
                    nom={famille.membre4.nom}
                    age={famille.membre4.age}>
                    {showDetail}

                </Membre2>
                <button className="btn btn-success ml-5 mb-3" onClick={this.handleShow}>{ isShow ? "Cacher" : "Montrer" }</button> {/* Si isShow est true le button prends Cacher comme value*/}

                <Button vieillir={() => this.handleClick(num)} num={num}/>  {/*on passe this.handleClick en props a mon component Button et on le fait*/}
                                                                            {/*sous forme de fonct° fléché sinon si on le passe de façon normal en js ça*/}
                                                                            {/*voudrait dire répète moi la fonction num fois, puis je lui passe une props num*/}
                                                                            {/*afin que l'affichage de mon bouton dans Button soit actualiser de la bonne num*/}
                                                                            {/*valeur*/}

            </div>
        );
    }
}

export default App;