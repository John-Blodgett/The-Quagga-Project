import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Page from './Page';
import Faq from './Faq';
import './App.css';
import './index.css';
import Tags from './components/Tags';
import Login from './login/Login';
import SignUp from './login/SignUp';
import { getAllDocuments, getAllDocumentData, getSpecificDocumentData, postDocument, mergeDocumentData, delDocument, delField, updateField } from './db';

async function dataHandling() {
    // let documentIDs = await getAllDocuments("Users");
    // console.log(documentIDs);

    // let documentIDsAndData = await getAllDocumentData("Users");
    // console.log(documentIDsAndData);

    let data = await getSpecificDocumentData("Users", "Sullivan");
    console.log(data);
}

function App() {
    const [renderedComponent, setRenderedComponent] = useState([]);
    const [popupIsOpen, setPopupIsOpen] = useState(false);
    
    // useEffect(() => {
    //     console.npmlog(renderedComponent);
    // }, [renderedComponent])

    useEffect(() => {
        // setRenderedComponent(<Faq key={1}/>)
        setRenderedComponent(<Login key={1}/>)
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
            {/* <Tags /> */}

            {/* <input type="button" value="Open popup" onClick={togglePopup}/>
            {popupIsOpen && <Login handleClose={togglePopup}/>} */}

            {/* <Page renderedComponent={renderedComponent} /> */}
        </>
    );
}

export default App;
