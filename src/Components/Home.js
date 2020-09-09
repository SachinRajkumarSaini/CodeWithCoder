import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer'; 

const Home = () => {
    return(
        <Fragment>
            <Navigation home="active" /> 
            <Header />
            <Introduction />
            <Skills />
            <Projects />
            <Footer />
        </Fragment>
    );
}


export default React.memo(Home);