import React, {useState} from 'react';
import Typist from 'react-typist';
import './../Styles/Twilight.css';
import Fish from './../all-images/fish copy.png';
import Squid from './../all-images/squid copy.png';
import Shark from './../all-images/sharkFINAL.png'
import Microplastic from './../all-images/microplastic.png';
import bubbleOne from './../all-images/bubblesOne.png'

function Twilight(props){
    
    const [showFishBubble, setShowFishBubble] = useState(false);
    const [showSquidBubble, setShowSquidBubble] = useState(false);
    const [showSharkBubble, setShowSharkBubble] = useState(false);
    
    return(
        <div className ='Twilight'>
            <Typist cursor={{show:false, hideWhenDone:true}}>
                <h1 className='twilightTitle'>Twilight Layer</h1>
            </Typist>
            <img src={bubbleOne} className='bubblesOne'/>
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
                        It is estimated that there will be more plastic in our oceans than fish by the year 2050.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }

            </div>

            <div id='shark' className='sharkContainer'>
                <img alt='' src={Shark} className='sharkImage' 
                    // listeners
                    onMouseEnter={() => setShowSharkBubble(true)}
                    onMouseLeave={() => setShowSharkBubble(false)}
                />
                {showSharkBubble ? 
                    // if true
                    <h2 className='sharkLabel'>
                        It takes the ocean 450 years to break down the plastic bottle.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }
            </div>
            <img alt='' src={Microplastic} className='microplasticImage'/> 
        </div>
    )
    

}
export default Twilight