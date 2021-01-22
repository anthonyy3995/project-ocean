import React, {useState} from 'react';
import Typist from 'react-typist';
import './../Styles/Sunlight.css';
import Turtle from './../all-images/turtle copy.png';
import TrashFish from './../all-images/trashfish.png'


function Sunlight(props){

    const [showTurtleBubble, setShowTurtleBubble] = useState(false);
    const [showTrashFishBubble, setShowTrashFishBubble] = useState(false);

    return(
        <div className ='Sunlight'>
            {/* {props.visible ? <Typist>
                <h1 className='sunlightTitle'>Sunlight Layer</h1>
            </Typist> : ''} */}
            <Typist cursor={{show:false, hideWhenDone:true}}>
                {/* <Typist.delay ms={500} /> */}
                <h1 className='sunlightTitle'>Sunlight Layer</h1>
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
                        Research indicates that half of the sea turtles worldwide have ingested plastic
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }  
            </div>
            <div id='trashfish' className='trashfishContainer'>
                <img alt='' src={TrashFish} className='trashfishImage' 
                    // listeners
                    onMouseEnter={() => setShowTrashFishBubble(true)}
                    onMouseLeave={() => setShowTrashFishBubble(false)}
                />
                {showTrashFishBubble ? 
                    // if true
                    <h2 className='trashfishLabel'>
                        Scientists at Ghent University in Belgium calculated that people who eat seafood ingest up to 11,000 pieces of plastic every year. 

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