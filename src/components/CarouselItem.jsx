/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/2893960/pexels-photo-2893960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='Globo airostatico' />
    <div className='carousel-item__details'>
      <div>
        <img className='img__item' src='https://img.icons8.com/flat_round/64/000000/play--v5.png' />
        <img className='img__item' src='https://img.icons8.com/color/64/000000/add.png' />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 144 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
