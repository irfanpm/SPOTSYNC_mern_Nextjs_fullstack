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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


const MuiMultipleImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [viewedImage, setViewedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const imageArray = Array.from(files).slice(0, 5); // Limit to 5 images
      setSelectedImages([...selectedImages, ...imageArray]);
    }
  };

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
    <div>
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
                    style={{ display: "none" }}
                    // onChange={(e) => handleImageUpload(e)}
                  />
                  <AddPhotoAlternateIcon
                    fontSize="large"
                    style={{ color: "grey" }}
                  />
                </IconButton>
              {/* )} */}
            </div>
      <Grid container spacing={2}>
        
        {selectedImages.slice(0, 5).map((image, index) => (
          <Grid item key={index}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                alt={`Uploaded Image ${index + 1}`}
                height="100"
                image={URL.createObjectURL(image)}
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer' }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Image {index + 1}
                </Typography>
                <IconButton
                  onClick={() => removeImage(index)}
                  color="secondary"
                  style={{ position: 'absolute', top: 0, right: 0 }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
          <div>
            {viewedImage && (
              <img
                src={URL.createObjectURL(viewedImage)}
                alt="Viewed Image"
                style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }}
                onClick={handleCloseModal}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MuiMultipleImageUploader;
