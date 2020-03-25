/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import '../assets/styles/components/Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Regístrate</h2>
        <form className='login__container--form' onSubmit={handleSubmit} >
          <input 
            name="name"
            className='input' 
            type='name' 
            placeholder='Nombre' 
            onChange={handleInput}
          />
          <input 
            name="email"
            className='input' 
            type='mail' 
            placeholder='Correo' 
            onChange={handleInput}
          />
          <input 
            name="password"
            className='input' 
            type='password' 
            placeholder='Contraseña' 
            onChange={handleInput}
          />
          <button className='button'>Registrame</button>
        </form>
        <Link to='/login'>
          Inicia secion
        </Link>
      </section>
    </section>
);
}

export default Register;
