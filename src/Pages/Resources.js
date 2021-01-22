import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './../Styles/Resources.css'
import BackArrow from './../all-images/back-arrow.png';

function Resources(){

    const sevenActionsLink = 'https://www.oceanicsociety.org/blog/1720/7-ways-to-reduce-ocean-plastic-pollution-today'
    const beachCleanUp = "https://www.volunteercleanup.org/find?email_address=&address_change%5Bdistance%5D=25&address_change%5Bsubmitted_address%5D=33326&commit=Search"
    const donationLinks = "https://donate.oceanconservancy.org/page/27503/donate/1?ea.tracking.id=20HPXWJAXX&gclid=Cj0KCQiA3Y-ABhCnARIsAKYDH7teV_QJ4sWZrbEF-W4W5fRKWNn2ZxJMjXeIwcpnEfhn_W-_0OYkD9gaAnTZEALw_wcB"
    const petitionLinks = "https://www.change.org/p/california-state-senate-pass-the-plastic-pollution-reduction-act"

    const [showBubbleOne, setShowBubbleOne] = useState(false);
    const [showBubbleTwo, setShowBubbleTwo] = useState(false);
    const [showBubbleThree, setShowBubbleThree] = useState(false);
    const [showBubbleFour, setShowBubbleFour] = useState(false);
    
    return(
        <div className='container'>
            <div className='backContainer'>
                <Link to='/project-ocean'>
                    <img className='back' src={BackArrow}/>
                </Link>
            </div>
            <h1 className= 'Title'>Resources</h1>
            <div className='bubbleContainer'>
                <div className='bubbleOne' onClick={()=>window.open(sevenActionsLink) }
                    onMouseEnter={() => setShowBubbleOne(true)}
                    onMouseLeave={() => setShowBubbleOne(false)}>
                    {
                        showBubbleOne ? 'CLICK HERE': "Help Reduce Pollution"
                    }

                </div>
                <div className='bubbleTwo' onClick={()=>window.open(beachCleanUp) }
                    onMouseEnter={() => setShowBubbleTwo(true)}
                    onMouseLeave={() => setShowBubbleTwo(false)}>
                    {
                        showBubbleTwo ? 'GO HERE': 'Clean Local Beaches'
                    }
                </div>
                <div className='bubbleThree' onClick={()=>window.open(donationLinks) }
                    onMouseEnter={() => setShowBubbleThree(true)}
                    onMouseLeave={() => setShowBubbleThree(false)}>
                    {
                        showBubbleThree ? 'DONATE HERE' : 'Support Ocean Wildlife'
                    }

                </div>
                <div className='bubbleFour' onClick={()=>window.open(petitionLinks) }
                    onMouseEnter={() => setShowBubbleFour(true)}
                    onMouseLeave={() => setShowBubbleFour(false)}>
                    {
                        showBubbleFour ? 'SIGN HERE': 'Make Your Voice Heard'
                    }
                </div>
            </div>
        </div>
    )
}
export default Resources;