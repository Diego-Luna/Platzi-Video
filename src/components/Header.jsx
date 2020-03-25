/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar.js';
import { logoutRequest } from '../actions/index';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/icons8-usuario-masculino-26.png';
import icon from '../assets/static/PlatziVideo.png';

const Header = ( props ) => {
  
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  
  const handleLogout = () => {
    props.logoutRequest({});
  }

  return (
    <header className='header'>

      <Link to='/'>
        <img className='header__img' src={icon} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          { hasUser ?
          <img src={gravatar(user.email)} alt={user.email} /> :
          <img src={userIcon} alt='User' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null
          }

          { hasUser ?
          <li><a href="#logout" onClick={handleLogout} >Cerrar Sesión</a></li>
          :
            <li>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </li>
          }
            
          </ul>
        </div>
      </header>
);
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.any.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
