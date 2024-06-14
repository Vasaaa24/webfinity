import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Team <span>Webfinity</span>
          </h1>
          <h3 className="text-animation">
            Objednejte si <span></span>
          </h3>
          <p>
            Nezávazně nás kontaktujte a sdělte nám svou představu o ideální
            webové stránce. Postaráme se o všechny technické a designové
            aspekty, aby vaše přání proměnila ve skutečnost. Vytvoříme web,
            který bude vizuálně atraktivní, funkční a uživatelsky přívětivý.
            Spolehněte se na nás a společně dosáhneme vašeho cíle.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn">
              Napsat
            </a>
            <a href="#services" className="btn">
              Znalosti
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src="/planet.gif" alt="Vasyl" />
        </div>
      </section>
    </div>
  );
};

export default Home;
