import { Box } from '@mui/material';
import React from 'react';

function RandomImage() {
  // Array of image URLs
  const imageUrls = [
    // 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D55',
    // 'https://images.pexels.com/photos/3823440/pexels-photo-3823440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1-shvets-5710791.jpg',
    // // Add more image URLs as needed
    "https://source.unsplash.com/800x300/?service"
  ];

  // Generate a random index to select a random image from the array
  // const randomIndex = Math.floor(Math.random() * imageUrls.length);

  // Style object with the random background image
  const boxStyle = {
    backgroundImage: `url(${imageUrls[0]})`,
    backgroundSize: '100% 100%',
    height: "400px",
    width:"100%",
    opacity: "0.9"

    
  };

  return (
    <div className='container '>
      <Box style={boxStyle} className="  mt-5 " >
        <Box>
            
        </Box>

      
      </Box>
    </div>
  );
}

export default RandomImage;
