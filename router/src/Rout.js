import React from 'react';
import Home from './components/App';
import NotFound from './components/NotFound';
import TodoId from './components/TodoId';
import { BrowserRouter, Route, Switch} from "react-router-dom";

const Rout = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/todos/:id' component={TodoId} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} /> {/* si aucune Route ne match alors affiche le component NotFound */}
        </Switch>
    </BrowserRouter>
)
export default Rout;