/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Regístrate</h2>
      <form className='login__container--form'>
        <input className='input' type='name' placeholder='Nombre' />
        <input className='input' type='mail' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrame</button>
        <button className='button'>Inicia secion</button>
      </form>
    </section>
  </section>
);

export default Register;
