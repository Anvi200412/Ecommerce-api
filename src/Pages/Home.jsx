import React from 'react';
import Hero from '../Components/Homes/Hero';
import Content from '../Components/Homes/Content';
import { Link } from 'react-router-dom';
 

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Link to="/product">
          <button
            style={{
              padding: '10px 20px',
              fontSize: '15px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #393838ff, #d1ccccff, #afafafff)',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
              onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.07)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
            }}
          >
        View All Products</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
