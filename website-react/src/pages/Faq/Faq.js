import React from 'react'

//testing 
import { useEffect } from 'react';
import { getRecentlyCompleted, parseRecentlyCompleted } from '../../Functions.js'

export default function Faq() {
    
    //testing Parse Recently Completed.
    const tokStr = '15279~dbKYca95A1oQ0xR2RT6E8IeDVQz7mERY7MGeLGYrkSfZQc3pp0TJP06scthYfDNZ'
    useEffect(()=>{
                    getRecentlyCompleted(tokStr)
                    .then(result => {
                        const data = result.data;
                        const parse_data = parseRecentlyCompleted(data)
                    })
                    .catch(function (error){
                        console.log(error)
                    })}, [])

    return (
        <>
            <h1 style={{textAlign: "center"}}>
            FAQ
            </h1>
            <p style={{textAlign: "left"}}>
            <ul>
                <strong>Q</strong>: I have no assignments listed! <br/><br/>
                <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
                <br/><br/><br/>
                <strong>Q</strong>: I have no assignments listed! <br/><br/>
                <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
                <br/><br/><br/>
                <strong>Q</strong>: I have no assignments listed! <br/><br/>
                <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
                <br/><br/><br/>
                <strong>Q</strong>: I have no assignments listed! <br/><br/>
                <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
                <br/><br/><br/>
                <strong>Q</strong>: I have no assignments listed! <br/><br/>
                <strong>A</strong>: If properly logged in, there may just be no assignments on your Canvas.
            </ul>
            </p>
            
        </>
        
    )
}