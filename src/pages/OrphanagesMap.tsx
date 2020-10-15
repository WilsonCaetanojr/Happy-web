import React, { useEffect, useState } from "react";
import logo from "../images/map-marker.svg";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/pages/orphanages-map.css";
import MapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("orphanages");
      setOrphanages(data);
    };
    getData();
  }, []);
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

        {orphanages.map((orphanage, index) => {
          return (
            <Marker
              key={index}
              position={[orphanage.latitude, orphanage.longitude]}
              icon={MapIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={22} color="white"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
