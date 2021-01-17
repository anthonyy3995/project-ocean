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
  const twilightVisible = useOnScreen(twilightRef, '-350px');
  const midnightVisible = useOnScreen(midnightRef, '-300px');
  const abyssVisible = useOnScreen(abyssRef, '-300px');
  const trenchVisible = useOnScreen(trenchRef, '-300px');

  const NavBar = () => {
    return(
      <div className='navContainer'> 
        <button 
          className='navButton'
          onClick={()=> executeScroll(sunlightRef)}
        >
          {sunlightVisible ? <h2>SHOWN</h2> : 1}
        </button>
        <button 
          className='navButton'
          onClick={()=> executeScroll(twilightRef)}
        >
          {twilightVisible ? <h2>SHOWN</h2> : 2}
        </button>
        <button 
          className='navButton'
          onClick={()=>executeScroll(midnightRef)}
        >
          {midnightVisible ? <h2>SHOWN</h2> : 3}
        </button>
        <button 
          className='navButton'
          onClick={()=>executeScroll(abyssRef)}
        >
          {abyssVisible ? <h2>SHOWN</h2> : 4}
        </button>
        <button 
          className='navButton'
          onClick={()=>executeScroll(trenchRef)}
        >
          {trenchVisible ? <h2>SHOWN</h2> : 5}
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
          <button className='exploreButton' onClick={()=>executeScroll(sunlightRef)}>
              Explore!
          </button>
          <div ref={titleRef}><Title visible={sunlightVisible}/></div>
          <div ref={sunlightRef}><Sunlight/></div>
        </div>
        <div className='dark'>
          <div ref={twilightRef}><Twilight/></div>
          <div ref={midnightRef}><Midnight/></div>
          <div ref={abyssRef}><Abyss/></div>
          <div ref={trenchRef}><Trench/></div>
          <button 
            className='returnUpButton' 
            onClick={() => executeScroll(titleRef)}
          >
            Go back up
          </button>
        </div>
        
      </div>
      
    </div>
  );
}
export default Main;