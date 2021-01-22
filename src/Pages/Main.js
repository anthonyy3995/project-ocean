import React, {useRef, useState, useEffect} from 'react';
import Title from './../Layers/Title.js'
import Sunlight from './../Layers/Sunlight.js'
import Twilight from './../Layers/Twilight.js'
import Midnight from './../Layers/Midnight.js'
import Abyss from './../Layers/Abyss.js'
import Trench from './../Layers/Trench.js'
// import useOnScreen from './../Hooks/UseOnScreen.js';
import './../Styles/Main.css';
import './../Styles/Nav.css';
import UpArrow from './../all-images/arrow-up.png';

function useOnScreen(ref, rootMargin = '0px') {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    //   changes from return ()=>{}
    //  https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
      else {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return isIntersecting;
  }

function Main(){
  // instantiate refs
  const titleRef = useRef(null)
  const sunlightRef = useRef(null)
  const twilightRef = useRef(null)
  const midnightRef = useRef(null)
  const abyssRef = useRef(null)
  const trenchRef = useRef(null)

  //instantiate useonescreen refs
    const titleVisible = useOnScreen(titleRef, '-300px');
    const sunlightVisible = useOnScreen(sunlightRef, '-300px');
    const twilightVisible = useOnScreen(twilightRef, '-300px');
    const midnightVisible = useOnScreen(midnightRef, '-300px');
    const abyssVisible = useOnScreen(abyssRef, '-300px');
    const trenchVisible = useOnScreen(trenchRef, '-300px');
 
  const NavBar = () => {
    return(
      <div className='navContainer'> 
        <button 
          className={`navButton ${sunlightVisible ? "active" : ""}`}
          onClick={()=> executeScroll(sunlightRef)}
        >
            Sunlight
          
        </button>
        <button 
          className={`navButton ${twilightVisible ? "active" : ""}`}
          onClick={()=> executeScroll(twilightRef)}
        >
          Twilight
        </button>
        <button 
          className={`navButton ${midnightVisible ? "active" : ""}`}
          onClick={()=>executeScroll(midnightRef)}
        >
          Midnight
        </button>
        <button 
          className={`navButton ${abyssVisible ? "active" : ""}`}
          onClick={()=>executeScroll(abyssRef)}
        >
          Abyss
        </button>
        <button 
          className={`navButton ${trenchVisible ? "active" : ""}`}
          onClick={()=>executeScroll(trenchRef)}
        >
          Trench
        </button>
      </div>
    )
  }

  const executeScroll = (id) => id.current.scrollIntoView({
    behavior: 'smooth'
  });
  return (
    <div className='App'>

      <NavBar/>
      
      <div className='layers'> 
        <div className='light'>
        
          <div ref={titleRef}>
              <Title/>
            </div>
            <div id='sunlight' ref={sunlightRef}>
              <Sunlight />
            </div>
        </div>
        <div className='dark'>
          <div ref={twilightRef}><Twilight /></div>
          <div ref={midnightRef}><Midnight /></div>
          <div ref={abyssRef}><Abyss /></div>
          <div ref={trenchRef}><Trench /></div>
          <div className='oceanFloor'>
              <img src={UpArrow} className='returnUpButton' onClick={() => executeScroll(titleRef)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;