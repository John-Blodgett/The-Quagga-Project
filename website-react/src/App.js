import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Page from './Page';
import Faq from './Faq';
import './App.css';
import './index.css';
import Tags from './components/Tags'


function App() {
    const [renderedComponent, setRenderedComponent] = useState([]);

    
    // useEffect(() => {
    //     console.npmlog(renderedComponent);
    // }, [renderedComponent])

    useEffect(() => {
        setRenderedComponent(<Faq key={1}/>)
        console.log(renderedComponent);
    }, [])

    return (
        <>
            {/* <Header />
            <NavBar setRenderedComponent={setRenderedComponent} />
            <Page renderedComponent={renderedComponent} /> */}
            <Tags />
        </>
    );
}

export default App;
