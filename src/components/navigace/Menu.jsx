import React from "react";

const Menu = () => {
  function getDropdown() {
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
  }
  return (
    <header className="header">
      <a href="#home" className="logo">
        Webfinity
      </a>

      <nav className="navbar">
        <a href="#home">Úvod</a>
        <a href="#education">Vzdělání</a>
        <a href="#services">Skills</a>
        <a href="#testimonials">Projekty</a>
        <a href="#contact">Kontakty</a>
      </nav>
      <div className="pozadiBurger" id="prvniBurger" onClick={getDropdown}>
          <div className="burger PrvniB" id="PrvniB"></div>
          <div className="burger DruhyB" id="DruhyB"></div>
          <div className="burger TretiB" id="TretiB"></div>
        </div>
      <div className="dropdown" id="dropdown" style={{ display: "none" }}>
        <div className="pozadiDropdown">
          <a href="#home" className="dropdownLink" onClick={getDropdown}>
            Úvod
          </a>
          <a href="#education" className="dropdownLink" onClick={getDropdown}>
            Vzdělání
          </a>
          <a href="#services" className="dropdownLink" onClick={getDropdown}>
            Skills
          </a>
          <a href="#testimonials" className="dropdownLink" onClick={getDropdown}>
            Projekty
          </a>
          <a href="#contact" className="dropdownLink" onClick={getDropdown}>
            Kontakty
          </a>
        </div>
      </div>
    </header>
  );
};

export default Menu;
