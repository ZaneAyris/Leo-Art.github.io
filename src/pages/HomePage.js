import React from 'react';


const HomePage = () => {
  console.log("/")
  return (
    <>
    <ul className='DuoElementCentered'>
      <li className='HomeText'>
        <h1>LEO</h1>
        <h1>KOVACS</h1>
      </li>
      
      <li>
        <img className="MainImage" src="/Leo-Art.github.io/imgs/topdownbug.png" alt="Main" />
      </li>
      
    </ul>

    </>
  );
};

export default HomePage;