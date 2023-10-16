import * as React from 'react';

import ImageList from '@mui/material/ImageList';

import { Card } from 'react-bootstrap';

export default function Categorylist() {
  return (<div className='container ' >
      <ImageList   cols={7} gap={9} >
        {itemData.map((item) => (<Card className='w-75 mt-5 d-flex align-items-center ' style={{borderColor:"black", borderStyle:"solid", overflow:"hidden" }}  key={item.img}>
            <img className='w-50 '
              src={item.img}
              alt={item.title}
           
            />
            <span  className='fs-5 text-center'> {item.title}</span>
            
       
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
    img: '/categgory icons/dentist_2023.svg.png',
    title: 'Books',
  },
  {
    img: '/categgory icons/driving_school_2023.svg.png',
    title: 'Sink',
  },
  {
    img: '/categgory icons/education.svg.png',
    title: 'Kitchen',
  },
  {
    img: '/categgory icons/estate-agent.svg.png',
    title: 'Blinds',
  },
  {
    img: '/categgory icons/eventorganizers.svg.png',
    title: 'Chairs',
  },
  {
    img:'/categgory icons/gym_2023.svg.png',
    title: 'Laptop',
  },

  {
    img:'/categgory icons/homedecor.svg.png',
    title: 'Coffee',
  },
  {
    img: '/categgory icons/hospital_2023.svg.png',
    title: 'Storage',
  },
  {
    img:'/categgory icons/hotel-2022.svg.png',
    title: 'Candle',
  },
  {
    img: '/categgory icons/packers_movers_2023.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/renthire.svg.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/travel_2023.png',
    title: 'Coffee table',
  },
  {
    img: '/categgory icons/hk_showmore.svg.png',
  
  },

];
