import React from 'react';
import './App.css';

function Produtos() {
  return (
    <>
      <div className='prodContainer'>
        <div className='prodImgCont'>
          <img
            src='./src/assets/CacaoWow.webp'
            alt='Nike Dunk Low Cacao Wow'
            className='prodImg'
          />
          <button className='prodNameButton'>Nike Dunk Low Cacao Wow</button>
        </div>
        <p>$2500</p>
      </div>

      <div className='prodContainer'>
        <div className='prodImgCont'>
          <img
            src='./src/assets/CrenshawSkate.webp'
            alt='Crenshaw Skate Club x Nike SB Dunk Low'
            className='prodImg'
          />
          <button className='prodNameButton'>
            Crenshaw Skate Club x Nike SB Dunk Low
          </button>
        </div>
        <p>$1850</p>
      </div>

      <div className='prodContainer'>
        <div className='prodImgCont'>
          <img
            src='./src/assets/RushFuchsia.webp'
            alt='Nike Dunk Low Rush Fuchsia'
            className='prodImg'
          />
          <button className='prodNameButton'>Nike Dunk Low Rush Fuchsia</button>
        </div>
        <p>$1200</p>
      </div>

      <div className='prodContainer'>
        <div className='prodImgCont'>
          <img
            src='./src/assets/BornRaised.webp'
            alt='Born x Raised x Nike SB Dunk Low One Block At A Time'
            className='prodImg'
          />
          <button className='prodNameButton'>
            Born x Raised x Nike SB Dunk Low One Block At A Time
          </button>
        </div>
        <p>$10000</p>
      </div>
    </>
  );
}

export default Produtos;