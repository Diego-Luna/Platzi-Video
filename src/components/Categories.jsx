// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div className='categories'>
    <h2 className='categories_title'>Mi lista</h2>
    {children}
  </div>
);

export default Categories;

