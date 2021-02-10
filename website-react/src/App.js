import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Page from './Page';
import Faq from './pages/Faq/Faq';
import Login from './login/Login';
import SignUp from './login/SignUp';
import { getAllDocuments, getAllDocumentData, getSpecificDocumentData, postDocument, mergeDocumentData, delDocument, delField, updateField } from './db';
import { getRecentlyCompleted, parseRecentlyCompleted } from './Functions.js'
import './App.css';
import './index.css';

async function dataHandling() {
    
}

function App() {
    const [renderedComponent, setRenderedComponent] = useState([]);
    const [popupIsOpen, setPopupIsOpen] = useState(true);
    
    const togglePopup = (() => {
        setPopupIsOpen(!popupIsOpen);
    })

    // useEffect(() => {
    //     console.npmlog(renderedComponent);
    // }, [renderedComponent])

    useEffect(() => {
        setRenderedComponent(<Login key={1} handleClose={togglePopup}/>) // how to make login "page" close if user clicks the x?
        dataHandling();
    }, [])

    return (
        <>
            <Header />
            <NavBar setRenderedComponent={setRenderedComponent} />
            <Page renderedComponent={renderedComponent} />
<<<<<<< HEAD
            {/*<Tags />*/}
=======

<<<<<<< HEAD
            {/* <input type="button" value="Open popup" onClick={togglePopup}/>
            {popupIsOpen && <Login handleClose={togglePopup}/>} */}
>>>>>>> e2ca7ef2f78349b8281611e4e3d5a1ab658a260b
=======
            {/* {popupIsOpen && <Login handleClose={togglePopup}/>} */}
>>>>>>> 47cbb87a0ea61cb29f73c039dcbc6e153ce4f0e1
        </>
    );
}

export default App;
