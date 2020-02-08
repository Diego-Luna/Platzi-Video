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
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi video'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Los faboritos de tus amigos'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
