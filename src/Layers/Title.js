import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './../Styles/Title.css';
import Boat from './../all-images/fishing-boat.png';

function Title(){
    
    const [showBoatBubble, setShowBoatBubble] = useState(false);
    
    return(
        <div className ='title'>
            <h1>
                Insert Daniel's Image
            </h1>
            <Link to='/resources'>
                Resources
            </Link>
            <div id='boat' className='boatContainer'>
                <img alt='' src={Boat} className='boatImage' 
                    // listeners
                    onMouseEnter={() => setShowBoatBubble(true)}
                    onMouseLeave={() => setShowBoatBubble(false)}
                />
                {showBoatBubble ? 
                    // if true
                    <h2 className='boatLabel'>
                        Of all plastics, fishing line takes the longest to biodegrade, taking up to 600 years.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }

            </div>
        </div>
        
    )
    

}
export default Title