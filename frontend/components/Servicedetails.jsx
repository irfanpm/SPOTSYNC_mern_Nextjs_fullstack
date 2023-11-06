'use client';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle'; // You may need to import the icon you want to use
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


function Servicedetails() {
  const servicedetails = useSelector((state) => state.servicedetails.service.data);
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (images,imageIndex) => {
    if(imageIndex>=3){
    setModalImages(images);
    setSelectedImage(imageIndex);
    setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLoadMoreImages = () => {
    setLoadedImages(loadedImages + 4);
  };
 const handleReview=(e)=>{
  e.preventDefault()

 }

  return (
    <div className='container'>
      {servicedetails?.map((item) => (
        <div key={item.id} className='mt-3'>
          <div className='d-flex'>
            <div className='col-lg-5 col-12 m-1'>
              <ImageListItem style={{ height: '300px' }}>
                <img
                  src={item.Image[0]}
                  alt="image"
                  style={{ borderRadius: "10px", border: "1px" }}
                />
              </ImageListItem>
            </div>
            <div className='col-lg-4 m-1 col-md-3'>
              <ImageListItem style={{ height: '300px' }}>
                <img
                  src={item.Image[1]}
                  alt="image"
                  style={{ borderRadius: "10px", border: "1px" }}
                />
              </ImageListItem>
            </div>
            <div className='col-lg-3'>
              {item.Image.slice(2, loadedImages).map((image, index) => (
                <ImageListItem key={index} 
                className='mt-1'  
                onClick={() =>  handleImageClick(item.Image, index + 2)} >
                  <img
                    src={image}
                    alt="image"
                    style={{ borderRadius: "10px", border: "1px", height: "145px" }}
                  /> 
                </ImageListItem>
              ))}
              {loadedImages <= item.Image.length && (
                <IconButton onClick={handleLoadMoreImages}>
                 
                </IconButton>
              )}
            </div>
          </div>
          
      <div>
        <li>{item.OwnerName}</li>
        <li>{item.Phone}</li>
        <li>{item.Category}</li>
        <li>{item.StreetAddress}</li>


      </div>
      <div className='d-flex flex-column w-50'>
        <form action="" onSubmit={handleReview}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
           <b> Post a review </b>
            </Typography>
      <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" />
      
      <TextField
                name="title"
                label="title"
                variant="outlined"
                fullWidth
                margin="normal"
                id='title'
              />
      
      <TextField
                name='address'
                label="Review"
                variant="outlined"
                multiline
                rows={4}
              
                fullWidth
                margin="normal"
                id='review'
              />
              
              <Button type="submit" variant="contained" className='w-25' style={{background:"#040333"}}>
                Submit
              </Button>
              </form>

      </div>
        </div>
      ))}
      <Dialog open={openModal} onClose={handleCloseModal} >
        <DialogContent>
          <ImageList>
            {modalImages.slice(4).map((image, index) => (
              <ImageListItem key={index}>
                <img src={image} alt="image" />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
        
      </Dialog>










    </div>
  );
}

export default Servicedetails;
