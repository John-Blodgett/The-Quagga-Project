import React from 'react';
import './SortBy.css';

export default function SortBy() {
    return ( 
        <div class="sbcFrame">
            <div> Sort by:</div>
            <div>Due Date<input type="checkbox" id="sort1" name="sort1" value="DueDate" /></div>
            <div>Assignment Points<input type="checkbox" id="sort2" name="sort2" value="AssignmentPoints" /></div>
            <div>Class<input type="checkbox" id="sort3" name="sort3" value="Class" /> </div>
            <div>Custom<input type="checkbox" id="sort4" name="sort4" value="Custom" /> </div>

        </div>
    )
}
