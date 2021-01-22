import React, {useState} from 'react'
import {Link} from 'react-scroll';
import './../Styles/Title.css';
import Boat from './../all-images/fishing-boat.png';
import DownArrow from './../all-images/thin-arrowheads-pointing-down.png';


function Title(){
    
    const [showBoatBubble, setShowBoatBubble] = useState(false);
    
    return(
        <div className ='title'>
            <p>-</p>
            <div className='resourcesButton'>
                <a className='resourcesLink' href='/resources'>
                    Resources
                </a>
            </div>
            <div className='downArrowContainer'>
                <Link  to='sunlight' spy={true} smooth={true} duration={500} >
                    <img className='downArrow' src={DownArrow}/>
                </Link>
            </div>
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
                    </h1>
                }
            </div>
        </div>
        
    )
    

}
export default Title