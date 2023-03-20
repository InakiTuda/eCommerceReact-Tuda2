import React from 'react';
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">IñaShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Computadoras Gaming</a>
        <a className="nav-link" href="#">Computadoras de Oficina y Hogar</a>
        <a className="nav-link" href="#">Notebooks</a>
        <a className="nav-link" href="#">
          <CartWidget/>
        </a>
      </div>
    </div>
  </div>
</nav>
    );
}

export default NavBar;