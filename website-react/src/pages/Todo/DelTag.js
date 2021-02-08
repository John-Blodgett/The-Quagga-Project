import React from 'react'
import './AddTag.css';
import { useState } from 'react';



export default function DelTag(props) {
    var curTags = props.curTags
    var setCurTags = props.setCurTags
        function handleDelTag(e){
            setCurTags(curTags.filter((tag) => tag.name !== e.target.textContent))
            props.setDelTagBool(false)
        }

        function createStyle(num, c){
            console.log(num)
            if (num === 0){return {position: 'absolute', left: '10px', top: '4px', background: c}}
            else if (num === 1){return {position: 'absolute',left: '100px', top: '4px', background: c}}
            else if (num === 2){return {position: 'absolute',left: '10px', top: '30px', background: c}}
            else if (num === 3){return {position: 'absolute',left: '100px', top: '30px', background: c}}
          };

        return (
            <div>
                <div className = 'DelTagFrame'>
                <div className = 'CurTags'>
                    {curTags.map((tag, index) =>{
                        return <div onClick = {(e) => handleDelTag(e)}className = 'TagName' style={createStyle(index, tag.color)}><div>{tag.name}</div></div>})}
                </div>
                </div>
            </div>
        )
}
