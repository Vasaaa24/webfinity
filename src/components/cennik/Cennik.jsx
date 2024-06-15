import React from "react";
import "boxicons";

const Cennik = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Cenník</h2>
        <div className="wrapper">
          <div className="testimonial-item">
            <h2>BASIC</h2>
            <p>
              Grad Read je projekt o maturitní četbě, vytvořený pomocí moderního
              frameworku React.js ve spolupráci s nástrojem Vite, který umožňuje
              rychlý a efektivní vývoj webových aplikací.
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
          </div>

          <div className="testimonial-item">
            <h2>Medium</h2>
            <p>
              MyWeb je stránka, na které se právě nacházíme. Byla vytvořena
              pomocí frameworku React.js, avšak s využitím nástroje WebPack
              místo Vite.
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
          </div>

          <div className="testimonial-item">
            <h2>Advanced</h2>
            <p>
              Zde naleznete různé projekty na mém GitHubu, každý s odlišným
              zaměřením a účelem. Prozkoumejte je a objevte různorodé
              technologie a přístupy, které používám.
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cennik;
