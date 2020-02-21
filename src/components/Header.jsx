/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/icons8-usuario-masculino-26.png';
import icon from '../assets/static/PlatziVideo.png';

const Header = () => (
  <header className='header'>

    <Link to='/'>
      <img className='header__img' src={icon} alt='Platzi Video' />
    </Link>

    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li>
          <Link to='/login'>
            Iniciar Sesión
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
