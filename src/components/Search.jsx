// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
    <input className='input_buscar' type='text' placeholder='Buscar...' />
  </section>
);

export default Search;
