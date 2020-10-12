import React from "react";
import logo from "../images/map-maker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import "../styles/pages/orphaneges.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logo}></img>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Americana</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Link to="" className="create-orphanage">
        <FiPlus size={22} color="white"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
