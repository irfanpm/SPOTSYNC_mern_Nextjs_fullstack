import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { getCookie } from "cookies-next";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Addservice() {
  const cookie = getCookie('token');

  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const Name = event.target.name.value;
    const Address = event.target.address.value;
    const Desc = event.target.desc.value;
   console.log(Name)
    // if(selectedCard=="user"){
    //     Service=false
    // }else{
    //     Service=true
    // }
    // console.log(Service);
    // console.log(Type);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/service/addservice', {
      
        servicename:Name,
        address:Address,
        description:Desc,
        location:"String",
    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    })
    console.log(response)
      alert(response.data.message);
      location.reload()
    } catch (error) {
      console.log(error.message);
    }
    event.target.reset();
  }



  return (
    <div>
      <Button onClick={handleOpen}>Add Service</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Add Service
            </Typography>
            <form onSubmit={handleSubmit}>
                
              <TextField
                name="input1"
                label="Service name"
                variant="outlined"
                fullWidth
                margin="normal"
                id='name'
              />
              <TextField
                name="input2"
                label="Address"
                variant="outlined"
                fullWidth
                margin="normal"
                id='address'
              />
              <TextField
                name="input3"
                label="description"
                variant="outlined"
                fullWidth
                minRows={3}
                maxRows={10}
                margin="normal"
                id='desc'
              />
                     {/* <TextareaAutosize
     
      aria-label="minimum height textarea"
      placeholder="Enter your text here"
    />
          */}
              <Button type="submit" variant="contained" style={{background:"red"}}>
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
