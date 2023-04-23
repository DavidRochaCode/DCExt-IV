import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
        <img
        src="https://drive.google.com/file/d/1EzC_bMDIXd5vH2_3ncbdfqluXv_ZyTDZ/view?usp=sharing"
        alt="dceIcon"
      />
        </Link>
        <Link className='menu' to="/publicar">
          Publicar
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
