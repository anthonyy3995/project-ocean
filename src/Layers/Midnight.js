import React, {useState} from 'react';
import Typist from 'react-typist';
import './../Styles/Midnight.css';
import Angler from './../all-images/anglerfish copy.png';
import Whale from './../all-images/whale.png'
import Microplastic from './../all-images/microplastic.png';
import bubblesTwo from './../all-images/bubbles2.png';
import PlasticBag from './../all-images/plastic-bag-FINAL.png';

function Midnight(props){

    const [showAnglerBubble, setShowAnglerBubble] = useState(false);
    const [showWhaleBubble, setShowWhaleBubble] = useState(false);

    return(
        <div className ='Midnight'>
            {/* {props.visible ? <Typist>
                <h1 className='midnightTitle'>Midnight Layer</h1>
            </Typist> : ''} */}
            <Typist cursor={{show:false, hideWhenDone:true}}>
                <h1 className='midnightTitle'>Midnight Layer</h1>
            </Typist>
            
            <img alt='' src={PlasticBag} className='plasticBagImage'/>
            <div id='angler' className='anglerContainer'>
                <img alt='' src={Angler} className='anglerImage' 
                    // listeners
                    onMouseEnter={() => setShowAnglerBubble(true)}
                    onMouseLeave={() => setShowAnglerBubble(false)}
                />
                {showAnglerBubble ? 
                    // if true
                    <h2 className='anglerLabel'>
                        Plastic bags have an average usage of 12 minutes and lifespan of 500+ years.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                } 
            </div>
            <img alt='' src={Microplastic} className='microplasticImage2'/> 
            <div id='whale' className='whaleContainer'>
                <img alt='' src={Whale} className='whaleImage' 
                    // listeners
                    onMouseEnter={() => setShowWhaleBubble(true)}
                    onMouseLeave={() => setShowWhaleBubble(false)}
                />
                {showWhaleBubble ? 
                    // if true
                    <h2 className='whaleLabel'>
                        Every year, 100,000 marine animals are killed by plastic bags.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                } 
            </div>
            <img src={bubblesTwo} className='bubblesTwo'/>
            <img alt='' src={Microplastic} className='microplasticImage3'/>
        </div>
        
    )
}
export default Midnight