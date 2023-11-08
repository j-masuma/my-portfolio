import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {HeroSection} from './components/HeroSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Projects} from './components/Projects';
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
