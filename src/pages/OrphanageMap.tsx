import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanageMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanageMap() {    
    return (
        <React.Fragment>
            <div id="page-map">
                <aside>
                    <header>
                        <img src={ mapMarkerImg } alt="Happy map marker"/>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crianças estão esperando sua visita =)</p>
                    </header>
                    <pre>{process.env.REACT_APP_TEST}</pre>
                    <footer>
                        <strong>Rio de Janeiro</strong>
                        <span>Rio de Janeiro</span>
                    </footer>
                </aside>
                <Map
                    center={[-22.965588, -43.384459]}
                    zoom={15}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
                </Map>
                <Link className="create-orphanage" to="/">
                    <FiPlus size={32} color="#FFF"/>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default OrphanageMap;
