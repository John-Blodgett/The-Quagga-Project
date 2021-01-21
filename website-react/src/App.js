import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Page from './Page';
import Faq from './Faq';
import './App.css';
import './index.css';
import { getAllDocuments, getAllDocumentData, getSpecificDocumentData } from './db';

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

    useEffect(() => {
        setRenderedComponent(<Faq key={1}/>)
        dataHandling();
    }, [])

    return (
        <>
            <Header />
            <NavBar setRenderedComponent={setRenderedComponent} />
            <Page renderedComponent={renderedComponent} />
        </>
    );
}

export default App;
