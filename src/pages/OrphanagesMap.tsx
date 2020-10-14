import React from "react";
import logo from "../images/map-maker.svg";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/pages/orphaneges.css";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

function OrphanagesMap() {
  const mapIcon = Leaflet.icon({
    iconUrl: logo,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  });
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
      <Map
        center={[-22.7238733, -47.3608195]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
        />
        <Marker position={[-22.7238733, -47.3608195]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="#">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={22} color="white"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
