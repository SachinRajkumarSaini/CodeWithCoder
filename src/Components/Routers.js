import React, { Fragment } from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routers = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    );
}

export default React.memo(Routers);