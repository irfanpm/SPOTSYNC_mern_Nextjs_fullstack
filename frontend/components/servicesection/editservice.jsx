'use client'
import React from 'react'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ImageUploader from './imageuploader';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';


function editservice() {
  const service=useSelector((state)=>state.findservie.service.data)
  console.log(service)
  const handleEdit=()=>{
    
  }
  return (
      <Box>

<Box className="" align={"center"} >
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Add Service
            </Typography>
            <ImageUploader/>
            <form  onSubmit={handleEdit}>

          {(service.map((item)=>(<>
            <div className='row justify-content-center'>
              <div className='col-md-6'>

              <TextField
                name="servicename"
                label="Service name"
                variant="standard"
                fullWidth
                defaultValue={item.serviceName}
                margin="normal"
                id='servicename'
              />
               <TextField
               name='"ownerfirst"'
          id="ownerfirst"
          variant="standard"

          label="OWNER first Name"
          multiline
        />
        &nbsp;&nbsp;
        <TextField
          id="ownerlast"
          name="ownerlast"
          variant="standard"

          label=" OWNER Last Name"
          placeholder="Placeholder"
          multiline
        />
              <TextField
                name='phone'
                label="Business PhoneNumber"
                defaultValue={item.Phone}
                variant="standard"
                fullWidth
                margin="normal"
                
                id='phone'
              />
                  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="Category" id='category'       defaultValue={item.Category}     variant="standard"
      name='category' fullWidth   />}
    />
                 <TextField
                name='description'
                label="Description"
                variant="standard"
                multiline
                defaultValue={item.Description}
                rows={4}
                fullWidth
                margin="normal"
                id='description'
                
              />
              
              <TextField
                name='street'
                label="Street address"
                variant="standard"
                defaultValue={item.StreetAddress}
                fullWidth
                margin="normal"
                id='street'
              />
          <TextField
           label="state"
           id="state"
           variant="standard"
           defaultValue={item.State}

           sx={{ m: 1, width: '25ch' }}
           name="state"
           InputProps={{
           }}
         />
          
                <TextField
          label="city"
          id="city"
          name="city"
          variant="standard"
          defaultValue={item.City}

          sx={{ m: 1, width: '25ch' }}
          InputProps={{
          }}
        />
          <TextField
           label="Zip code"
           id="zip"
           variant="standard"
           defaultValue={item.Zipcode}

           name="zip"
           sx={{ m: 1, width: '25ch' }}
           InputProps={{
           }}
         />
            <TextField
                name='address'
                label="Address"
                defaultValue={item.Address}

                variant="standard"
                multiline
                rows={3}
              
                fullWidth
                margin="normal"
                id='address'
              />
              </div>

            </div>
   
              <Button type="submit" variant="contained" style={{background:"red"}}>
                Submit
              </Button></>
              )))
}
            </form>
          </Box>






      </Box>


    
  )
}

export default editservice

const top100Films = [
  { label: 'hospital'},
  { label: 'hotel' },
  { label: 'resturent' },
  { label: 'bakery' },
  { label: 'education' },
  { label: "spa" },
]