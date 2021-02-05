import React, { Component } from 'react'
import './AddTag.css';
import { useState } from 'react';
import { CirclePicker } from 'react-color';


export default function AddTag(props) {
    var [curColor, setCurColor] = useState('#de0909');
    var [curName, setCurName] = useState('');
    var [suggestNames, setSuggestNames] = useState(['309', 'Low Priority', 'Important', '10 mins'])
    var [suggestColors, setSuggestColors] = useState(['#C4C4C4', '#19B1BB', '#CD18EA', '#FFE794'])

    var curTags = props.curTags
    var setCurTags = props.setCurTags
        function handleCreateTag(){
            setCurTags([...curTags, {index: curTags.length+1, color: curColor, name:curName}])
            props.setAddTagBool(false)
        }
    function handleSuggestTag(e){
        const id = e.target.id
        setCurTags([...curTags, {index: curTags.length+1, color: suggestColors[id], name:suggestNames[id]}])
        props.setAddTagBool(false)
    }
    const colorList = ['#de0909', "#f44336", "#ff5722", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", 
    "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", 
    "#ffc107", "#ff9800",  "#795548", "#607d8b", "#d6d4d4"]

    
        return (
            <div className='AddTagFrame' test='hi'>
                <div className = 'SuggestionsFrame'></div>
                    <div className = 'SuggestTitle'>Suggestions</div>
                    <div className = 'SuggestTagsFrame'>
                        <div><div className='SuggestTag' id = {0} onClick={(e)=>handleSuggestTag(e)}>{suggestNames[0]}</div></div>
                        <div><div className='SuggestTag' id = {1} onClick={(e)=>handleSuggestTag(e)}>{suggestNames[1]}</div></div>
                        <div><div className='SuggestTag' id = {2} onClick={(e)=>handleSuggestTag(e)}>{suggestNames[2]}</div></div>
                        <div><div className='SuggestTag' id = {3} onClick={(e)=>handleSuggestTag(e)}>{suggestNames[3]}</div></div>
                    </div>
                <div className = 'CreateNewFrame'>
                    <div className = 'Custom'>Custom: </div>
                    <div className = 'CustomTagName'>Tag Name: </div>
                    <input className = 'CustomInput' onChange={(e) => setCurName(e.target.value)}></input>
                </div>
                <div className ='ColorPicker'>
                    <CirclePicker onChange={ (c) => setCurColor(c.hex) } colors = {colorList} width = {69} className = 'SelectedColor' circleSize = {16} circleSpacing = {1}/>
                    <div className ='CreateTag' onClick = {() => handleCreateTag()}>Create Tag</div>
                </div>
            </div>
        )
}
