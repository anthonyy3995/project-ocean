import React, {useState} from 'react';
import Typist from 'react-typist';
import './../Styles/Sunlight.css';
import Turtle from './../all-images/turtle copy.png';

function Sunlight(){

    const [showTurtleBubble, setShowTurtleBubble] = useState(false);

    return(
        <div className ='Sunlight'>
            <Typist>
                <h1 className='layerTitle'>Sunlight Layer</h1>
            </Typist>
            
            <div id='turtle' className='turtleContainer'>
                <img alt='' src={Turtle} className='turtleImage' 
                    // listeners
                    onMouseEnter={() => setShowTurtleBubble(true)}
                    onMouseLeave={() => setShowTurtleBubble(false)}
                />
                {showTurtleBubble ? 
                    // if true
                    <h2 className='turtleLabel'>
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
export default Sunlight