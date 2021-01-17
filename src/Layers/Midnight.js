import React, {useState} from 'react';
import './../Styles/Midnight.css';
import Angler from './../all-images/anglerfish.png';
import Microplastic from './../all-images/microplastic.png';

function Midnight(){

    const [showAnglerBubble, setShowAnglerBubble] = useState(false);

    return(
        <div className ='Midnight'>
            <h1>
                Midnight Layer
            </h1>
            <img alt='' src={Microplastic} className='microplasticImage'/>
            <div id='angler' className='anglerContainer'>
                <img alt='' src={Angler} className='anglerImage' 
                    // listeners
                    onMouseEnter={() => setShowAnglerBubble(true)}
                    onMouseLeave={() => setShowAnglerBubble(false)}
                />
                {showAnglerBubble ? 
                    // if true
                    <h2 className='anglerLabel'>
                        1 out of every 4 fish at markets in California contained plastic in their guts.
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
export default Midnight