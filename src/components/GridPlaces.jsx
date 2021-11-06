import React from 'react';
//hooks
// import { useState } from 'react';
//styles
import '../assets/styles/Components/GridPlaces.styl';
//images
import sanBlas from '../assets/img/san-BlasH.jpg';
import chorrosOla from '../assets/img/chorros-de-ola.jpg';
import laYeguada from '../assets/img/layeguada.jpg';
import islaEscudo from '../assets/img/escudo-de-veraguas.jpg';
import venasAzules from '../assets/img/venas-azules.jpg';
import bocas from '../assets/img/Bocas-del-Toro-Panama.jpg';
import islaIguana from '../assets/img/isla-iguana.jpg';

export default function GridPlaces() {

  const locationsState = [
    {
      id: 0,
      img: sanBlas,
      location: 'San Blas',
      province: 'Guna Yala',
      reviews: '20 Reviews',
    },
    {
      id: 1,
      img: chorrosOla,
      location: 'Chorros de Ola',
      province: 'Cocle',
      reviews: '20 Reviews',
    },
    {
      id: 2,
      img: laYeguada,
      location: 'La Yeguada',
      province: 'Veraguas',
      reviews: '104 Reviews',
    },
    {
      id: 3,
      img: islaEscudo,
      location: 'Isla Escudo de Veraguas',
      province: 'Bocas del Toro',
      reviews: '205 Reviews',
    },
    {
      id: 4,
      img: venasAzules,
      location: 'Venas Azules',
      province: 'Colon',
      reviews: '20 Reviews',
    },
    {
      id: 5,
      img: bocas,
      location: 'Bocas',
      province: 'Bocas del Toro',
      reviews: '20 Reviews',
    },
    {
      id: 6,
      img: islaIguana,
      location: 'Isla Iguana',
      province: 'Herrera',
      reviews: '104 Reviews',
    },
  ];

  //   const [state, setstate] = useState(locationsState);
  return (
    <div className='locations-container'>
      <ul className='grid-container'>
        {
          locationsState.map((location) => (
            <li className='grid-items' key={location.id}>
              <img src={location.img} alt='location-img' className='location-img' />
              <div className='container-data'>
                <div className='text-container'>
                  <h2 className='location__tittle'>{location.location}</h2>
                  <div className='details-text-container'>
                    <span className='province-text'>{location.province}</span>
                    <span className='reviews-text'>{location.reviews}</span>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
