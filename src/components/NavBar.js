import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Nome da loja como Brand - leva para a Home */}
        <Link className="navbar-brand" to="/">
          Doces Kenzo
        </Link>

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
              <Link className="nav-link" to="/category/produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/receitas">
                Receitas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/dietas">
                Dietas
              </Link>
            </li>
          </ul>

          {/* CartWidget - ícone do carrinho */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;