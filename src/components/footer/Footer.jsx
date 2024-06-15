import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        <ul className="list">
          <li>
            <a href="#home">Úvod</a>
          </li>
          <li>
            <a href="#about">O nás</a>
          </li>
          <li>
            <a href="#testimonials">Cenník</a>
          </li>
          <li>
            <a href="#contact">Objednat</a>
          </li>
         
        </ul>
        <p className="copyright">Created for portfolio by Vasyl Halyčka</p>
      </footer>
    );
}

export default Footer;