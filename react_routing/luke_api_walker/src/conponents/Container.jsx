import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HeaderForm from './HeaderForm';
import Planet from '../views/Planet';
import People from '../views/People';
import Starships from '../views/Starships';


const Container = () => {
    return (
        <BrowserRouter>
        <div>
            <HeaderForm />
            <Switch>
                <Route path="/people/:id">
                    <People />
                </Route>
                <Route path="/planet/:id">
                    <Planet />
                </Route>
                <Route path="/:starships/:id">
                    <Starships />
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default Container;
