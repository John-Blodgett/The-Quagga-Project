import React from 'react';
import './CustomTask.css';

export default function CustomTask() {
    return ( 
        <div className ="customTaskFrame">
            <div className = 'background'>
                <div className = 'title'>Create Custom</div>
            </div>
            <div className = 'classLabel'>Class: </div>
            <input className = "classInput"></input>
            <div className = 'dueDateLabel'>Due Date: </div>
            <input className = "dueDateInput"></input>
            <div className = 'pointValueLabel'>Point Value: </div>
            <input className = "pointValueInput"></input>
            <div className = 'descLabel'>Description: </div>
            <input className = "descInput"></input>
        </div>
    )
}
