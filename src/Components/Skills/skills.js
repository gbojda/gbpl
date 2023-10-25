import React from 'react';
import './skills.css';
import git  from './../Assets/git.png'
import html from '../Assets/html.png'
import jslogo from './../Assets/jslogo.png'
import css from './../Assets/CSS3_logo_and_wordmark.svg.png';
import react from './../Assets/ricon.png';



const Skills = () => {

  return (

    <section id='skills'>
        <span className="skillTitle">What i do</span>
        <span className="skillDesc">I am constantly developing, gaining skills and experience every day to meet expectations. <br /> of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={git} alt="git" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Git</h2>
                    <p>I effectively use Git for version control, managing branches, resolving conflicts, and collaborating with fellow developers.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={html} alt="html" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>HTML</h2>
                    <p>I create structured HTML content, including forms and accessibility considerations, while utilizing HTML attributes for styling and JavaScript interactions.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={css} alt="css" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>CSS</h2>
                    <p>Proficient in CSS, I design web pages, ensuring responsiveness and adding animations for visual appeal.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={jslogo} alt="jslogo" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>JavaScript</h2>
                    <p>I create interactive web experiences, handle events, and dynamically update content using JavaScript.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={react} alt="react" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React</h2>
                    <p>With a basic understanding of React, I develop components, manage state and props, and build single-page applications with React Router.</p>
                </div>
            </div>
        </div>
        <span>



        </span>
    </section>
  );
}

export default Skills;