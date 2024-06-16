import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  
  const getDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    const PrvniB = document.getElementById("PrvniB");
    const DruhyB = document.getElementById("DruhyB");
    const TretiB = document.getElementById("TretiB");

    if (dropdown.style.display === "none") {
      dropdown.style.display = "flex";
      dropdown.style.animation = "goDropdown .5s ease forwards";
      DruhyB.style.display = "none";
      PrvniB.style.animation = "rotateAnimationPrvni .2s ease forwards";
      TretiB.style.animation = "rotateAnimationDruhy .2s ease forwards";
    } else {
      setTimeout(function () {
        dropdown.style.display = "none";
      }, 100);
      dropdown.style.animation = "outDropdown .5s ease forwards";
      setTimeout(function () {
        DruhyB.style.display = "flex";
      }, 50);
      PrvniB.style.animation = "rotateAnimationPrvniZpet .2s ease forwards";
      TretiB.style.animation = "rotateAnimationDruhyZpet .2s ease forwards";
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        Webfinity <span>team</span>
      </Link>

      <nav className="navbar">
        <Link to="/" onClick={() => scrollToSection("home")}  className="menua">Úvod</Link>
        <Link to="/" onClick={() => scrollToSection("about")} className="menua">O nás</Link>
        <Link to="/" onClick={() => scrollToSection("testimonials")} className="menua">Cenník</Link>
        <Link to="/" onClick={() => scrollToSection("contact")} className="menua">Objednat</Link>
        <Link to="/vypocet/Calc" className="kalkulačka-pc" >Kalkulačka</Link>
      </nav>
      <div className="pozadiBurger" id="prvniBurger" onClick={getDropdown}>
        <div className="burger PrvniB" id="PrvniB"></div>
        <div className="burger DruhyB" id="DruhyB"></div>
        <div className="burger TretiB" id="TretiB"></div>
      </div>
      <div className="dropdown" id="dropdown" style={{ display: "none" }}>
        <div className="pozadiDropdown">
          <Link to="/" className="dropdownLink" onClick={() => {getDropdown(); scrollToSection("home");}}>
            Úvod
          </Link>
          <Link to="/" className="dropdownLink" onClick={() => {getDropdown(); scrollToSection("about");}}>
            O nás
          </Link>
          <Link to="/" className="dropdownLink" onClick={() => {getDropdown(); scrollToSection("testimonials");}}>
            Cenník
          </Link>
          <Link to="/" className="dropdownLink" onClick={() => {getDropdown(); scrollToSection("contact");}}>
            Kontakty
          </Link>
          <Link to="/vypocet/Calc" className="dropdownLinkCalc" onClick={() => {getDropdown();}}>
            Kalkulačka
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Menu;