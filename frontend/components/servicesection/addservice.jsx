'use client'
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
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import ImageUploader from './imageuploader';
import { useSelector,useDispatch } from 'react-redux';
import { deletearray } from '@/redux/features/serviceimage';
import { useRouter } from 'next/navigation';



export default function Addservice() {
  const router=useRouter()
  const dispatch=useDispatch()
  const cookie = getCookie('token');
 const image1=useSelector((state)=>state.image.image)
 console.log(image1)

    const handleAddservice= async(event)=>{
        event.preventDefault()
        const Servicename=event.target.servicename.value
        const ownerfirst=event.target.ownerfirst.value
        const ownerlast=event.target.ownerlast.value
        const phone=event.target.phone.value
        const category=event.target.category.value
        const descriptioon=event.target.description.value
        const street=event.target.street.value
        const state=event.target.state.value
        const city=event.target.city.value 
        const zip=event.target.zip.value
        const address=event.target.address.value        
        
        console.log(Servicename,ownerfirst,ownerlast,phone,category,descriptioon,street,state,city,zip,address)
        try {
              const response = await axios.post('http://127.0.0.1:8000/api/service/addservice', {
                servicename:Servicename,
                ownername:ownerfirst+""+ownerlast,
                phone:phone,
                category:category,
                descriptioon:descriptioon,
                streeaddress:street,
                state:state,
                city:city,
                zipcode:zip,
                address:address,
                image:image1,
                location:"String",
            },{
              headers: {
                Authorization: `Bearer ${cookie}`,
              },
            })

            dispatch(deletearray())
            console.log(response)



              alert(response.data.message);

            } catch (error) {
              console.log(error.message);
            }

            router.push('/Serviceprovider/serviceprofilepage')



            event.target.reset();
      
      
      }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
 
  //   const Name = event.target.name.value;
  //   const Address = event.target.address.value;
  //   const Desc = event.target.desc.value;
  //  console.log(Name)
  //   // if(selectedCard=="user"){
  //   //     Service=false
  //   // }else{
  //   //     Service=true
  //   // }
  //   // console.log(Service);
  //   // console.log(Type);

  //  
  // }



  return (
      
          <Box className="" align={"center"} >
            <Typography id="transition-modal-title" variant="h6" component="h2">
            Add Service
            </Typography>
            <ImageUploader/>
            <form onSubmit={handleAddservice}>

            <div className='row justify-content-center'>
              <div className='col-md-6'>

              <TextField
                name="servicename"
                label="Service name"
                variant="outlined"
                fullWidth
                margin="normal"
                id='servicename'
              />
               <TextField
               name='"ownerfirst"'
          id="ownerfirst"
          label="OWNER first Name"
          multiline
        />
        &nbsp;&nbsp;
        <TextField
          id="ownerlast"
          name="ownerlast"
          label=" OWNER Last Name"
          placeholder="Placeholder"
          multiline
        />
              <TextField
                name='phone'
                label="Business PhoneNumber"
                variant="outlined"
                fullWidth
                margin="normal"
                
                id='phone'
              />
                  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => <TextField {...params} label="Category" id='category'  name='category' fullWidth   />}
    />
                 <TextField
                name='description'
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                id='description'
                
              />
              
              <TextField
                name='street'
                label="Street address"
                variant="outlined"
                fullWidth
                margin="normal"
                id='street'
              />
          <TextField
           label="state"
           id="state"
           sx={{ m: 1, width: '25ch' }}
           name="state"
           InputProps={{
           }}
         />
          
                <TextField
          label="city"
          id="city"
          name="city"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
          }}
        />
          <TextField
           label="Zip code"
           id="zip"
           name="zip"
           sx={{ m: 1, width: '25ch' }}
           InputProps={{
           }}
         />
            <TextField
                name='address'
                label="Address"
                variant="outlined"
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
              </Button>
            </form>
          </Box>

  );
}

const top100Films = [
  { label: 'hospital'},
  { label: 'education' },
  { label: "repair" },
  { label: "docter" },
  { label: "beautyspa" },
  { label: "events" },
  { label: "hotel" },
  { label: "logistics" },
  { label: "gym" },
  { label: "shop" },

  { label: "more" },
  
]
