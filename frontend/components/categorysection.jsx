import * as React from 'react';

import ImageList from '@mui/material/ImageList';

import { Card } from 'react-bootstrap';

export default function Categorylist() {
  return (<div className='container ' >
      <ImageList   cols={9} gap={9} >
        {itemData.map((item) => (<Card className='w-50 mt-5 rounded-5 ' style={{borderColor:"black", borderStyle:"solid", overflow:"hidden" }}  key={item.img}>
            <img
              src={item.img}
              alt={item.title}
           
            />
            
       
      </Card> ))}
      </ImageList>
    
    </div>
  );
}

const itemData = [
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Bed',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Books',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Sink',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Kitchen',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Blinds',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Chairs',
  },
  {
    img:'/categgory icons/contractor-2022.svg.png',
    title: 'Laptop',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Doors',
  },
  {
    img:'/categgory icons/contractor-2022.svg.png',
    title: 'Coffee',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Storage',
  },
  {
    img:'/categgory icons/contractor-2022.svg.png',
    title: 'Candle',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/contractor-2022.svg.png',
    title: 'Coffee table',
  }
];
