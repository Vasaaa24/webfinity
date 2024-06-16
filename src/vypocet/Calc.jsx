import React from "react";

const Calc = () => {
  function getValue() {
    let pocet = document.getElementById("pocet");
    let cena = document.getElementById("cena");
    let typ = document.getElementById("typ");
    let pocetValue = pocet.value;
    let typValue = typ.value;
    let cisloCena;

    switch (typValue) {
      case "Basic":
        cisloCena = 15000;
        break;
      case "Medium":
        cisloCena = 20000;
        break;
      case "Advanced":
        cisloCena = 27000;
        break;
      default:
        cisloCena = 0;
    }

    if (Number(pocetValue) < 1 || isNaN(Number(pocetValue))) {
      cena.textContent = "Zadali jste nereálnou hodnotu";
    } else {
      cena.textContent = (pocetValue * cisloCena).toLocaleString() + " KČ"; // Use toLocaleString() for formatting numbers with commas
    }
  }

  return (
    <section className="calc-container">
      <div className="calcBox">
        <input
          id="pocet"
          className="input-field"
          placeholder="Napište počet stránek..."
        />

        <select id="typ" className="select-field" >
          <option className="option">Basic</option>
          <option className="option">Medium</option>
          <option className="option">Advanced</option>
        </select>

        <button id="btn" className="vypocetbtn" onClick={getValue}>
          Potvrdit
        </button>
        <div id="cena" className="cena-value">Cena</div>
      </div>
    </section>
  );
};

export default Calc;
