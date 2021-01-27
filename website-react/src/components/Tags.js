import React from 'react'
import './Tags.css';
import AddTag from './AddTag.js'
import { useState } from 'react';


export default function Tags() {
        const [addTagBool, setAddTagBool] = useState(false);
        const [curTags, setCurTags] = useState([{index: 1, color: "#ffffff", name:'309'}]);

        function createStyle(num, c){
            if (num == 1){return {position: 'absolute', left: '46px', top: '4px',color: c}}
            else if (num == 2){return {position: 'absolute',left: '124px', top: '4px',color: c}}
            else if (num == 2){return {position: 'absolute',left: '46px', top: '30px',color: c}}
            else if (num == 2){return {position: 'absolute',left: '124px', top: '4px', color: c}}

          };

        function handleAddTag(){
            setAddTagBool(true)
        }
        function handleDelTag(){
        }
  

        return (
            <div className='TagsFrame'>
                <div className='TagsTitle'>
                    Tags:
                </div>
                <div className = 'CurTags'>
                    {curTags.map((tag, index) =>{
                        return <div className = 'TagName'><div style={createStyle(index, tag.color)}>{tag.name}</div></div>})}
                </div>
                <div className='AddTag' onClick={() => handleAddTag()}>Add Tag</div>
                <div className='DelTag' onClick={() => handleDelTag()}>Del Tag</div>
                { addTagBool ? <AddTag setAddTagBool ={setAddTagBool} curTags = {curTags} setCurTags = {setCurTags}/> : null }
            </div>
            
           
        )
}
