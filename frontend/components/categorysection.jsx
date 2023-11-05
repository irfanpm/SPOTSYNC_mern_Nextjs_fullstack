import React from 'react';
import ImageList from '@mui/material/ImageList';
import { Card } from 'react-bootstrap';

export default function Categorylist() {
  return (
    <div className='container mt-2'>
      <ImageList className='row justify-content-between ' >
        {itemData.map((item, index) => (
          <div key={index} className='text-center col-lg-1 col-md-2 col-4 '>
            <div
              style={{
                borderColor: '#05cdff',
                overflow: 'hidden',
                border: '1px solid',
                borderRadius: '50%',
                height: '69px',
                width: '69px', 
              }}
              className='d-flex justify-content-center align-items-center' 
            >
              <img
                className='w-50 mt-2'
                style={{ height: 'auto', opacity: '0.9' }}
                src={item.img}
                alt={item.title}
              />
            </div>
            <span color='#879599'>{item.title}</span>
          </div>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: '/categgory icons/educationicon.png',
    title: 'Bed',
  },
  {
    img: '/categgory icons/car-repair.png',
    title: 'Books',
  },
  {
    img: '/categgory icons/tooth.png',
    title: 'Kitchen',
  },
  {
    img: '/categgory icons/women.png',
    title: 'Blinds',
  },
  {
    img: '/categgory icons/wedding-rings.png',
    title: 'Chairs',
  },
  {
    img: '/categgory icons/hotel.png',
    title: 'Laptop',
  },
  {
    img: '/categgory icons/fast-food.png',
    title: 'Coffee',
  },
  {
    img: '/categgory icons/boxes.png',
    title: 'Storage',
  },
  {
    img: '/categgory icons/weight.png',
    title: 'Storage',
  },
  {
    img: '/categgory icons/menu.png',
    title: 'Storage',
  },
];
