import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
// import Works from "./components/Works/works";
import Contact from "./Components/Contact/contact";
// import Footer from "./components/Footer/footer";
import WeatherApp from "./Components/Weatherapp/WeatherApp";
import { Routes, Route, BrowserRouter as Router,  } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Intro/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/WeatherApp' element={<WeatherApp/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      {/* <Footer />   */}
    </div>
    </Router>
  );
}

export default App;
