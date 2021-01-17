import React, {useState} from 'react';
import './../Styles/Twilight.css';
import Fish from './../all-images/fish copy.png';
import Squid from './../all-images/squid copy.png';
import Microplastic from './../all-images/microplastic.png';

function Twilight(){
    
    const [showFishBubble, setShowFishBubble] = useState(false);
    const [showSquidBubble, setShowSquidBubble] = useState(false);
    
    return(
        <div className ='Twilight'>
            <h1>
                Twilight Layer
            </h1>
            <div id='fish' className='fishContainer'>
                <img alt='' src={Fish} className='fishImage' 
                    // listeners
                    onMouseEnter={() => setShowFishBubble(true)}
                    onMouseLeave={() => setShowFishBubble(false)}
                />
                {showFishBubble ? 
                    // if true
                    <h2 className='fishLabel'>
                        1 out of every 4 fish at markets in California contained plastic in their guts.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }
                
            </div>

            <div id='squid' className='squidContainer'>
                <img alt='' src={Squid} className='squidImage' 
                    // listeners
                    onMouseEnter={() => setShowSquidBubble(true)}
                    onMouseLeave={() => setShowSquidBubble(false)}
                />
                {showSquidBubble ? 
                    // if true
                    <h2 className='squidLabel'>
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
export default Twilight