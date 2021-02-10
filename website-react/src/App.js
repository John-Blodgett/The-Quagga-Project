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

            {/* {popupIsOpen && <Login handleClose={togglePopup}/>} */}
        </>
    );
}

export default App;
