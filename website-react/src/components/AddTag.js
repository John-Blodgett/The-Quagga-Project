import React, { Component } from 'react'
import './AddTag.css';
import { useState } from 'react';
import { CirclePicker } from 'react-color';
import setCurTags from './Tags'
import curTags from './Tags'

export default function AddTag(props) {
    const [curColor, setCurColor] = useState('#de0909');
    const [curName, setCurName] = useState('');

    var curTags = props.curTags
    var setCurTags = props.setCurTags
        function handleCreateTag(){
            setCurTags([...curTags, {index: curTags.length+1, color: curColor, name:'309'}])
            console.log(curTags)
        }
    const colorList = ['#de0909', "#f44336", "#ff5722", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", 
    "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", 
    "#ffc107", "#ff9800",  "#795548", "#607d8b", "#d6d4d4"]
        return (
            <div className='AddTagFrame'>
                <div className = 'SuggestionsFrame'></div>
                    <div className = 'SuggestTitle'>Suggestions</div>
                    <div className = 'SuggestTagsFrame'>
                        <div><div className='SuggestTag'>309</div></div>
                        <div><div className='SuggestTag'>Potato</div></div>
                        <div><div className='SuggestTag'>READ</div></div>
                        <div><div className='SuggestTag'>60 Minutes</div></div>
                    </div>
                <div className = 'CreateNewFrame'>
                    <div className = 'Custom'>Custom: </div>
                    <div className = 'CustomTagName'>Tag Name: </div>
                    <input className = 'CustomInput'></input>
                </div>
                <div className ='ColorPicker'>
                    <CirclePicker onChangeComplete={ (c) => setCurColor(c.hex) } colors = {colorList} width = {69} className = 'SelectedColor' circleSize = {16} circleSpacing = {1}/>
                    {/* <input type="color" className="SelectedColor" name="selectedcolor" value={curColor}></input> */}
                    <div className ='CreateTag' onClick = {() => handleCreateTag()}>Create Tag</div>
                </div>
            </div>
        )
}
// className='SelectedColor'
// circleSize= '10px'
// onSwatchHover= {(c,e) => console.log(e)}