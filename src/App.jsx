import Menu from "./components/navigace/Menu";
import Home from "./components/homepage/Home";
import About from "./components/onas/About";
import Cennik from "./components/cennik/Cennik";
import Contact from "./components/kontakt/Contct";

// CSS
import './App.css';
import "./components/kontakt/contact.css"
import "./components/cennik/cennik.css"
import "./components/onas/about.css"
import "./components/navigace/menu.css"
import "./components/homepage/home.css"

function App() {
  return (
    <>
    <Menu />
    <Home />
    <About/>
    <Cennik/>
    <Contact/>
    </>
  );
}

export default App;
