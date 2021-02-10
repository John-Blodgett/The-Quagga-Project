import React from 'react';
import './SortBy.css';

export default function SortBy(props) {

    const { setCurCourseAssn, allCourseAssn} = props

    function handleClick(e){
        const attrib = e.target.value
        console.log(allCourseAssn[attrib])
        setCurCourseAssn(allCourseAssn[attrib])
    }
    return ( 
        <div className="sbcFrame">
            <div> Sort by:</div>
            <div>Due Date<input type="radio"  name="sort" value="original" onClick={handleClick}/></div>
            <div>Assignment Points<input type="radio"  name="sort" value="sortByPointValue" onClick={handleClick}/></div>
            <div>Class<input type="radio"  name="sort" value="sortbyClass"onClick={handleClick} /> </div>
            <div>Custom<input type="radio" name="sort" value="Custom" onClick={handleClick}/> </div>
        </div>
    )
}
