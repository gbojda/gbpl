import React from 'react';
import './skills.css';
import git  from '../../Assets/git.png'
import html from '../../Assets/html.png'
import jslogo from '../../Assets/jslogo.png'
import css from '../../Assets/CSS3_logo_and_wordmark.svg.png';
import react from '../../Assets/ricon.png';



const Skills = () => {

  return (

    <section id='skills'>
        <span className="skillTitle">Zbór Chrześcijan w Pawłowicach</span>
        {/* <span className="skillDesc">I am constantly developing, gaining skills and experience every day to meet expectations. <br /> of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript.</span> */}
        <div className="skillBars">
            <div className="skillBar">
                {/* <img src={git} alt="git" className="skillBarImg" /> */}
                <div className="skillBarText">
                    <h2>Kim jesteśmy</h2>
                    <p>Bóg, który wielokrotnie i na różne sposoby przemawiał niegdyś do ojców przezproroków;W tych ostatecznych dniach przemówił do nas przez swego Syna, którego ustanowiłdziedzicem wszystkiego, przez którego też stworzył światy;Który, będąc blaskiem jego chwały i wyrazem jego istoty i podtrzymując wszystkosłowem swojej mocy, dokonawszy oczyszczenia z naszych grzechów przez samegosiebie, zasiadł po prawicy Majestatu na wysokościach"List do Hebrajczyków 1:1-3Witamy Cię zacny Czytelniku i cieszymy się że zawędrowałeś na naszą stronę. Jest tomiejsce, w którym Chrześcijanie - Dzieci Boże z Pawłowic i okolic składają świadectwo otym że Jezus Chrystus musiał cierpieć i trzeciego dnia zmartwychwstać.My w jego imieniu głosimy pokutę i przebaczenie grzechów (Ew.Łk 24:46-47).Drogi Czytelniku, jeżeli przygniata Cię ciężar Twoich grzechów i troski tego życia, a strach izwątpienie pogrążają Cię w rozpaczy i bezsilności, zatrzymaj się na chwilę i posłuchajEwangelii - Dobrej Nowiny, Radosnej Wieści.Ewangelia jest lekarstwem, i jak każde lekarstwo na początku może wydawać się gorzkie doprzełknięcia.Wszyscy bowiem jesteśmy grzesznikami, to gorzka prawda którą musimy uznać i wyznaćprzed sobą i Bogiem. Jedynym skutecznym lekarstwem na grzech jest odkupienie, które jestw Jezusie Chrystusie (Rzym 3:23-25).Biblia - Boże Słowo mówi "Każdy kto w niego wierzy, nie będzie zawstydzony…Każdy ktowezwie imienia Pana, będzie zbawiony…Wiara jest ze słuchania a słuchanie przez SłowoBoże" (Rzym 10:9-17).Bóg rzeczywiście przemawia do człowieka i my chcemy Ci opowiedzieć o wszystkim, coJezus czynił i czego nauczał oraz o swoich osobistych przeżyciach z Bogiem.Zapraszamy Cię na nasze chrześcijańskie zgromadzenia, gdzie wspólnie w radościchwalimy i błogosławimy Boga.Zgromadzenia odbywają się w Pawłowicach przy ul. Zjednoczenia 17 w dniach:Środa godz.18:00Piątek godz.18:00Niedziela godz.10:30</p>
                </div>
            </div>
            {/* <div className="skillBar">
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
                </div> */}
            {/* </div> */}
        </div>
        <span>



        </span>
    </section>
  );
}

export default Skills;