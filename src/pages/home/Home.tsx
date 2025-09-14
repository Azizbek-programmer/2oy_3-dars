import React from 'react';
import Product from '../../components/hero/Product';

const Home = () => {
  return (
    <div>
      <Product/>
    </div>
  );
};

export default React.memo(Home);
