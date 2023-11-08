'use client';
import React, { useRef, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle'; // You may need to import the icon you want to use
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Avatar, Button } from '@mui/material';
import axios from 'axios';
import { getCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {favourite} from '@/redux/features/favourite';


function Servicedetails() {
  const servicedetails = useSelector((state) => state.servicedetails.service.data);
  const review=useSelector((state)=>state.review.review.data)
  const avgreviews=useSelector((state)=>state.avgreview.review.data)
  const f=useSelector((state)=>state.showfav.fav)
  // console.log(avgreviews)
  console.log(f);
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);
  const[fav,setfav]=useState(false)
  const dispatch=useDispatch()
  // const myref=useRef(servicedetails[0]._id)

  // console.log(myref.current)
  // dispatch(getReview())
  const favarray=f?.map((item)=>item.serviceId)
  console.log(favarray)

  const router=useRouter()
  const cookie=getCookie('token')
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
  const handlefavourite=(id)=>{

      dispatch(favourite(id))

      
   

  }

  const handleLoadMoreImages = () => {
    setLoadedImages(loadedImages + 4);
  };
 const handleReview= async(event,id)=>{
  event.preventDefault()
  const title=event.target.title.value
  const review=event.target.review.value
  const rating=event.target.rating.value
  console.log(rating)
  try {
    const response=await axios.post('http://127.0.0.1:8000/api/user/review',{
      serviceid:id,
      title:title,
      rating:rating,
      comment:review
    },{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },

    })
    console.log(response.data.message)

  } catch (error) {
    
  }


 }
 const navlogin=()=>{
  alert('please login')

 }

  return (
    <div className='container'>
      {servicedetails?.map((item) => (
        <div key={item.id}  className='mt-3'>
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
        <Rating name="rating" defaultValue={avgreviews}  precision={0.5} size="large"  readOnly/>
        <IconButton onClick={()=>handlefavourite(item._id)}>
          {(favarray.includes(item._id))?
            
                 <FavoriteOutlinedIcon style={{color:"red"}} />: 
                <FavoriteBorderOutlinedIcon />

          }

        </IconButton>

        <li>{item.Phone}</li>
        <li>{item.Category}</li>
        <li>{item.StreetAddress}</li>


      </div>
      <div className='d-flex flex-column w-50'>
        {
        review?.map((data)=>(
            <div>
              <div className='d-flex'>

                 <Avatar alt="Remy Sharp" src={data.userId.avatar}   /> <h6>{data.userId.Username}</h6>
              </div>
                 <div>
                 <Rating name="rating" defaultValue={data.Rating}  precision={0.5} size="large" readOnly />
                 <p>{data.Comment}</p>
                 </div>


          
            </div>
          
          ))
        }
      <Typography id="transition-modal-title" variant="h6" component="h2">
           <b> Post a review </b>
            </Typography>
            {!cookie ?
        <div>
        <Rating name="rating" defaultValue={0}  precision={0.5} size="large" disabled />
      
      <TextField
                name="title"
                label="title"
                variant="outlined"
                fullWidth
                margin="normal"
                id='title'
                disabled
              />
      
      <TextField
                name='review'
                label="Review"
                variant="outlined"
                multiline
                rows={4}
                disabled
                fullWidth
                margin="normal"
                id='review'
              />
              
              <Button type="submit" variant="contained" className='w-25' onClick={navlogin} style={{background:"#040333"}}>
                Login
              </Button>


        </div>:
        <form action="" onSubmit={(e)=>handleReview(e,item._id)}>
  
      <Rating name="rating" defaultValue={0}  precision={0.5} size="large" />
      
      <TextField
                name="title"
                label="title"
                variant="outlined"
                fullWidth
                margin="normal"

                id='title'
              />
      
      <TextField
                name='review'
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
}
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
