import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
        <img
        src="https://cdn.discordapp.com/attachments/1019312548652257312/1099814255521439744/DCExt-IV.png"
        width="100"
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
