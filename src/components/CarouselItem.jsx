/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='img__item' src='https://img.icons8.com/flat_round/64/000000/play--v5.png' />
        <img className='img__item' src='https://img.icons8.com/color/64/000000/add.png' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
