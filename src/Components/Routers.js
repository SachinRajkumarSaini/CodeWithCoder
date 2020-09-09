import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routers = () =>{
    return(
        <Router>
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default React.memo(Routers);