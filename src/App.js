import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";


import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/Skills' element={<Skills/>} />

        <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer />  
    </div>
    </Router>
  );
}

export default App;
