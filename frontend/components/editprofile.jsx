'use client'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const EditModal = () => {
    const [isOpen, setIsOpen] = useState(false);

 
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleEdit=async ()=>{
    try{
        const url=await upload(avatar)
        console.log(url)
        setImage(url)

        await axios.put('http://127.0.0.1:8000/api/user/profile/avatar',
        {
            avatar:url

        },
        {
       headers: {
                Authorization: `Bearer ${cookie}`,
              }
            }

        )
        location.reload()

          


    }catch(error){
        console.log("from upload",error.message);
    }


  }

  const handleSave = () => {
   
    handleClose(); // Close the modal after saving
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: 'white', background: 'transparent', color: "#040333", fontWeight: "bold", boxShadow: "none" }}>
        Edit profile
      </Button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="edit-modal"
        aria-describedby="edit-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <form action="" onSubmit={handleEdit}>

          <TextField label="Username"   fullWidth margin="normal" />
          <TextField label="MobileNumber"  fullWidth margin="normal" />
          <TextField label="Email"  fullWidth margin="normal" />
          <Button onClick={handleSave} style={{background:"green", color:"white" }} variant="contained"  sx={{ mt: 2 }}>
            Save
          </Button>
        </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
