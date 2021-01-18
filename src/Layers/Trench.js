import React, {useState} from 'react';
import Typist from 'react-typist';
import './../Styles/Trench.css';
import Shrimp from './../all-images/shrimp copy.png';
import Crab from './../all-images/crab.png';
import Floor from './../all-images/trenchBottom.png'
import Microplastic from './../all-images/microplastic.png';


function Trench(props){
    
    const [showShrimpBubble, setShowShrimpBubble] = useState(false);
    const [showCrabBubble, setShowCrabBubble] = useState(false);

    return(
        <div className ='Trench'>
            {/* {props.visible ? <Typist>
                <h1 className='trenchTitle'>Trench Layer</h1>
            </Typist> : ''} */}

            <Typist cursor={{show:false, hideWhenDone:true}}>
                <h1 className='trenchTitle'>Trench Layer</h1>
            </Typist>
            
            <div id='shrimp' className='shrimpContainer'>
                <img alt='' src={Shrimp} className='shrimpImage' 
                    // listeners
                    onMouseEnter={() => setShowShrimpBubble(true)}
                    onMouseLeave={() => setShowShrimpBubble(false)}
                />
                {showShrimpBubble ? 
                    // if true
                    <h2 className='shrimpLabel'>
                        Not one square mile of surface ocean anywhere on this planet is free of plastic pollution.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }
                
            </div>

            <div id='crab' className='crabContainer'>
                <img alt='' src={Crab} className='crabImage' 
                    // listeners
                    onMouseEnter={() => setShowCrabBubble(true)}
                    onMouseLeave={() => setShowCrabBubble(false)}
                />
                {showCrabBubble ? 
                    // if true
                    <h2 className='crabLabel'>
                        70 percent of ocean garbage actually sinks to the seafloor, meaning we’re unlikely to ever be able to clean it up.
                    </h2>:
                    // if false
                    <h1>
                        {/* emptiness */}
                    </h1>
                }
            {/* <div className='floor'></div> */}
                
            </div>
            <img alt='' src={Microplastic} className='microplasticTrench'/>
        </div>
        
    )
}
export default Trench