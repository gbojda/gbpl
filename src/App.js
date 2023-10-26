import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
// import Works from "./components/Works/works";
// import Contact from "./components/Contact/contact";
// import Footer from "./components/Footer/footer";
// import WeatherApp from "./components/Weatherapp/WeatherApp";
import { Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      
    <Navbar/>
    <Routes>
        
        <Route path='/' element={<Intro/>} />
        <Route path='/Skills' element={<Skills/>} />
        {/* <Route path='/WeatherApp' element={<WeatherApp/>} /> */}

        {/* <Route path='/Contact' element={<Contact/>} /> */}
      </Routes>
      {/* <Footer />   */}
     
    </div>
    </BrowserRouter>
  );
}

export default App;
