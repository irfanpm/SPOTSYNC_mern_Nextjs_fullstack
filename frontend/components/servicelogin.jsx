'use client'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from "next/navigation";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Adjust the top margin for content alignment
const contentStyle = {
  my: 4, // Adjust the top margin here
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function Servicelogin() {
  const router=useRouter()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlNumber=()=>{
    router.push('/Serviceprovider/addService')

  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" style={{ color: 'white', background: "#040333"}}>
        Add Business
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '10px',
              zIndex: 1,
              color: 'black',
            }}
          >
            <CloseIcon />
          </Button>
          <Box sx={contentStyle}>
          <Typography component="h6" variant="h6">
                  Please enter phone number
                </Typography>
           
          
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phonenumber"
                type='tel'
                autoComplete="email"
                InputProps={{
                  style: {
                    borderRadius: '5px',
                  },
                }}
              />
            
            <Button  endIcon={<SendIcon />} style={{background:"#040333",color:"white"}} onClick={handlNumber}>
  Send
</Button>

            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}