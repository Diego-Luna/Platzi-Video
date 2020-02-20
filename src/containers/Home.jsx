/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-unresolved
import Header from '../components/Header';
// eslint-disable-next-line import/no-unresolved
import Search from '../components/Search';
// eslint-disable-next-line import/no-unresolved
import Categories from '../components/Categories';
// eslint-disable-next-line import/no-unresolved
import Carousel from '../components/Carousel';
// eslint-disable-next-line import/no-unresolved
import CarouselItem from '../components/CarouselItem';
// eslint-disable-next-line import/no-unresolved
import Footer from '../components/Footer';
// eslint-disable-next-line import/no-unresolved
import useInitialState from '../hooks/useInitialState';

// eslint-disable-next-line import/no-unresolved
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {

  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1>cargando...</h1> : (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi video'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='Los faboritos de tus amigos'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;
