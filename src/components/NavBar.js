import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Nome da loja como Brand */}
        <a className="navbar-brand" href="#">
          Doces Kenzo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista de categorias clicáveis */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#produtos">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#receitas">
                Receitas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dietas">
                Dietas
              </a>
            </li>
          </ul>
          {/* Aqui está o CartWidget */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;