import React from 'react'
import './Tags.css';
import AddTag from './AddTag.js'
import DelTag from './DelTag.js'
import { useState } from 'react';


export default function Tags() {
        const [addTagBool, setAddTagBool] = useState(false);
        const [delTagBool, setDelTagBool] = useState(false);
        const [curTags, setCurTags] = useState([]);

        function createStyle(num, c){
            if (num === 0){return {position: 'absolute', left: '46px', top: '4px', background: c}}
            else if (num === 1){return {position: 'absolute',left: '124px', top: '4px', background: c}}
            else if (num === 2){return {position: 'absolute',left: '46px', top: '30px', background: c}}
            else if (num === 3){return {position: 'absolute',left: '124px', top: '30px', background: c}}
          };

        function handleAddTag(){
            if (curTags.length < 4)
                setAddTagBool(true)
        }
        function handleDelTag(){
            if (delTagBool){
                setDelTagBool(false)
            }
            if (curTags.length >0 )
                setDelTagBool(true)
        }
  

        return (
            <div className='TagsFrame'>
                <div className='TagsTitle'>
                    Tags:
                </div>
                <div className = 'CurTags'>
                    {curTags.map((tag, index) =>{
                        return <div className = 'TagName' style={createStyle(index, tag.color)}><div>{tag.name}</div></div>})}
                </div>
                <div className='AddTag' onClick={() => handleAddTag()}>Add Tag</div>
                <div className='DelTag' onClick={() => handleDelTag()}>Del Tag</div>
                {(addTagBool && !delTagBool) ? <AddTag setAddTagBool ={setAddTagBool} curTags = {curTags} setCurTags = {setCurTags}/> : null }
                {(!addTagBool && delTagBool) ? <DelTag setDelTagBool ={setDelTagBool} curTags = {curTags} setCurTags = {setCurTags}/> : null }
            </div>
            
           
        )
}
