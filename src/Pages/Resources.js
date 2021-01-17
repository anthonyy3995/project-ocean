import React from 'react';
import {Link} from 'react-router-dom';
import './../Styles/Resources.css'

function Resources(){
    return(
        <div className='container'>
            <h1>Resources Page</h1>
            <Link to='/'>
                Go Back
            </Link>
        </div>
        
    
    )
}
export default Resources;