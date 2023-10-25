import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './intro.css';
import bgv from './../Assets/bgv.mp4'; 
// import bg from '../../assets/image.png'
// import { Link } from 'react-scroll';




const Intro = () => {
  
const [iksde] = useTypewriter({
  words:[' Creative ', ' Patience', ' Effective ', ' Determined', ' Communicative' ],
  loop: {},
  typeSpeed: 200,
  deleteSpeed: 100,
});

  return (
    <section id="home">
    <video src={bgv} muted loop autoPlay />
        <div className="content">

          <h1 style={{margin: '50px', color: 'white'}}>
            I'm  
            <span style={{fontWeight: 'bold', color: 'white'}}>
              {iksde}
            </span>
            <span style={{color: 'white'}}>
            <Cursor/>
            </span>
          </h1>


          {/* <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Smith</span><br />Website Designer</span>
          <p className="introPara">I em skilled web designer with experience in creating<br /> visually appealing and user freindly websites.</p>
          <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>        */}
        </div>
        {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  )
}



export default Intro;