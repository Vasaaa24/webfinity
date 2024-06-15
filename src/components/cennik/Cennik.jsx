import React from "react";
import "boxicons";

const Cennik = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Cenník</h2>
        <div className="wrapper">
          <div className="testimonial-item">
            <h2 class="sweet-title">BASIC</h2>
            <p>
              Nabízíme profesionální a cenově dostupnou prezentaci vaší firmy na
              internetu s naší statickou webovou stránkou. Ideální pro ty, kteří
              potřebují online vizitku nebo portfólio s pevným obsahem, který
              nevyžaduje časté aktualizace.
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
            <a href="#" className="vypocet">
              Výpočet ceny
            </a>
          </div>

          <div className="testimonial-item">
            <h2 class="sweet-title">MEDIUM</h2>
            <p>
              Pro firmy, které chtějí více zapojit své návštěvníky, nabízíme
              interaktivní a dynamickou webovou stránku. Tato stránka přináší
              prvky jako odesílání zpráv, animace a personalizovaný obsah pro
              lepší uživatelský zážitek
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
            <a href="#" className="vypocet">
              Výpočet ceny
            </a>
          </div>

          <div className="testimonial-item">
            <h2 class="sweet-title">ADVANCED</h2>
            <p>
              Naše prémiové řešení je vysoko dynamická obchodní stránka, ideální
              pro e-commerce a obchodní platformy. Obsahuje pokročilé funkce
              jako online objednávky a integrované platební systémy pro
              optimální uživatelskou přívětivost a konverze
            </p>
            <div className="links">
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
              <box-icon name="star" type="solid" color="gold"></box-icon>
            </div>
            <a href="#" className="vypocet">
              Výpočet ceny
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cennik;
