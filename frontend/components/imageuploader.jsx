'use client'
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Serviceupload from './serviceimageupload';
import { getCookie } from "cookies-next";
import { send } from '@/redux/features/serviceimage';
import { useDispatch } from 'react-redux';



const ImageUploader = () => {
  const cookie = getCookie('token')
  const dispatch=useDispatch()
  const [selectedImages, setSelectedImages] = useState([]);
  const [viewedImage, setViewedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
 console.log(selectedImages)
  const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imageArray = Array.from(files).slice(0, 5); // Limit to 5 images
      setSelectedImages([...selectedImages, ...imageArray]);
      selectedImages.map( async(item)=>{
        try{
          const url=await Serviceupload(item)
          console.log(url)
          dispatch(send(url))
        //   await axios.post('http://127.0.0.1:8000/api/service/addservice',
        //   {
        //       image:url
    
        //   },
        //   {
        //  headers: {
        //           Authorization: `Bearer ${cookie}`,
        //         }
        //       }
    
        //   )
          // location.reload()
       
            
    
    
      }catch(error){
          console.log("from upload",error.message);
      }
  
  
  
  
      })
     
  

  };

}
  const handleupload=()=>{
    
    

  }

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleImageClick = (image) => {
    setViewedImage(image);
    setOpenModal(true);
  };


  const handleCloseModal = () => {
    setOpenModal(false);
  };


  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  return (
    <div >
         <Typography component="h5" variant="h6" align="center">
            Add image
          </Typography>

       
            <div
              style={{
                width: "90%",
                maxWidth: "400px",
                minHeight: "100px",
                border: "2px dashed #ccc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                padding: "20px",
              }}
            >
          
              {/* {imageURL ? ( */}
                <img
                  src=''
                  alt="Selected Banner"
                  style={{ maxWidth: "100%" }}
                />
              {/* ) : ( */}
                <IconButton component="label" color="secondary">
                  <input
                    type="file"
                    accept="image/*"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={handleImageChange}

                    // onChange={(e) => handleImageUpload(e)}
                  />
                  <AddPhotoAlternateIcon
                    fontSize="large"
                    style={{ color: "grey" }}
                  />
                </IconButton>
              {/* )} */}
            </div>
            <button onClick={handleupload}>upload</button>
      <div className='row '>
        
        {selectedImages.slice(0, 5).map((image, index) => (
          <Grid item key={index}   className='col-md-2 '      >
            <Card variant="outlined" className='d-flex '>
              <CardMedia
                component="img"
                alt={`Uploaded Image ${index + 1}`}
                image={URL.createObjectURL(image)}
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer' }}
              />
                {/* <Typography variant="body2" color="textSecondary">
                   file uploaded {index + 1}
                </Typography> */}
                <IconButton
                  onClick={() => removeImage(index)}
                  color="secondary"
                 
                >
                  <DeleteIcon />
                </IconButton>
            </Card>
          </Grid>
        ))}
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
        <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '50%',  // Adjust the width as needed
              bgcolor: 'background.paper',
              boxShadow: 24,
              // p: 3,
            }}
          >
            {viewedImage && (
              <img
                src={URL.createObjectURL(viewedImage)}
                alt="Viewed Image"
                style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }}
                onClick={handleCloseModal}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageUploader
