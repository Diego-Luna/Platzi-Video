/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-logo.png';
import twitterIcon from '../assets/static/twitter.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2 tabindex="1" >Inica secion</h2>
      <form className='login__container--form'>
        <input aria-label='Correo' className='input' type='text' placeholder='Correo' />
        <input aria-label='Contraseña' className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' /> Recuérdame
          </label>
          <a href='/'>olvide mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div> <img src={googleIcon} />Iniciar seción con Goole</div>
        <div> <img src={twitterIcon} />Iniciar seción con Twitter</div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
