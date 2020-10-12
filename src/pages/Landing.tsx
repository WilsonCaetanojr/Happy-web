import React from "react";
import "../styles/pages/landing.css";
import logo from "../images/logo.svg";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logo} />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Americana</strong>
          <span>São Paulo</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowDownRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
