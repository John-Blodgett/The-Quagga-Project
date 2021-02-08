import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Page from './Page';
import Faq from './pages/Faq/Faq';
import './App.css';
import './index.css';
import Login from './login/Login';
import SignUp from './login/SignUp';
import { getAllDocuments, getAllDocumentData, getSpecificDocumentData, postDocument, mergeDocumentData, delDocument, delField, updateField } from './db';
import { getRecentlyCompleted, parseRecentlyCompleted } from './Functions.js'

async function dataHandling() {
    
}

function App() {
    const [renderedComponent, setRenderedComponent] = useState([]);
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    
    // useEffect(() => {
    //     console.npmlog(renderedComponent);
    // }, [renderedComponent])

    useEffect(() => {
        setRenderedComponent(<Faq key={1}/>)
        dataHandling();
    }, [])

    const togglePopup = (() => {
        setPopupIsOpen(!popupIsOpen);
    })

    return (
        <>
            <Header />
            <NavBar setRenderedComponent={setRenderedComponent} />
            <Page renderedComponent={renderedComponent} />

            {/* <input type="button" value="Open popup" onClick={togglePopup}/>
            {popupIsOpen && <Login handleClose={togglePopup}/>} */}
        </>
    );
}

export default App;
