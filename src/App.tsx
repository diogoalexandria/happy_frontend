import React from 'react';
import './styles/global.css';
import './styles/landing.css';
import logoImg from './images/logo.svg';

function App() {
  return (
    <React.Fragment>
      <div className="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy logo" />
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>
          <div className="location">
            <strong>Rio de Janeiro</strong>
            <span>Rio de Janeiro</span>
          </div>
          <a className="enter-app" href="">*</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
