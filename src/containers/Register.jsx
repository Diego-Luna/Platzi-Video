/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Regístrate</h2>
      <form className='login__container--form'>
        <input className='input' type='name' placeholder='Nombre' />
        <input className='input' type='mail' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrame</button>
      </form>
      <Link to='/login'>
        Inicia secion
      </Link>
    </section>
  </section>
);

export default Register;
