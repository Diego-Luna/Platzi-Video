/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import Search from '../components/Search';
// eslint-disable-next-line import/no-unresolved
import Categories from '../components/Categories';
// eslint-disable-next-line import/no-unresolved
import Carousel from '../components/Carousel';
// eslint-disable-next-line import/no-unresolved
import CarouselItem from '../components/CarouselItem';
// eslint-disable-next-line import/no-unresolved
import useInitialState from '../hooks/useInitialState';

// eslint-disable-next-line import/no-unresolved
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {

  return (
    <>
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {myList.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi video'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

      <Categories title='Los faboritos de tus amigos'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />) }
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
