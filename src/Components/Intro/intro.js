import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './intro.css';
import bgv from '../../Assets/bgv.mp4'; 





const Intro = () => {
  
const [iksde] = useTypewriter({
  words:[' Drogą ', ' Prawdą', ' Życiem ' ],
  loop: {},
  typeSpeed: 200,
  deleteSpeed: 100,
});

  return (
    <section id="home">
    <video src={bgv} muted loop autoPlay />
        <div className="content">

          <h1 style={{margin: '50px', color: 'white'}}>
            Bóg jest 
            <span style={{fontWeight: 'bold', color: 'white'}}>
              {iksde}
            </span>
            <span style={{color: 'white'}}>
            <Cursor/>
            </span>
          </h1>   
        </div>  
    </section>
  )
}



export default Intro;