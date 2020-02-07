/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import React from 'react';

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

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>

    </Categories>
    <Footer />
  </div>
);

export default App;
