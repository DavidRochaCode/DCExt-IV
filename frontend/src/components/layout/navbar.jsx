import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src="https://drive.google.com/file/d/1EzC_bMDIXd5vH2_3ncbdfqluXv_ZyTDZ/view?usp=share_link" alt="Logo da navbar, está escrito DCExt-v" width="100"/>
        </Link>
        <Link className='menu' to="/publicar">
          Publicar
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
