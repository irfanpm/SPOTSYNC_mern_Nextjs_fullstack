'use client';
import React, { useEffect, useRef, useState } from 'react';
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
import { Avatar, Button, Skeleton } from '@mui/material';
import axios from 'axios';
import { getCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {favourite} from '@/redux/features/favourite';
import { Servicedetails } from '@/redux/features/showservicedetails';
import { getReview } from '@/redux/features/reviewdisplay';
import { Avgreview } from '@/redux/features/averagerating';
function Servicedetail({id}) {
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
  useEffect(()=>{
    dispatch(Servicedetails(id))
    dispatch(favourite(id))
    dispatch(getReview(id))
    dispatch(Avgreview(id))



  },[])

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
      {servicedetails?.map((item) => (item?
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
          
      <div className='mt-3'>
        <h2 style={{fontFamily:"sans-serif", fontWeight:"700"}}>{item.serviceName}</h2>
        <div className='d-flex'>

        <div style={{width:"35px",height:"25px" ,background:"green",borderRadius:"5px"}} className='text-center mt-1 text-white'><h5>{avgreviews}</h5></div>
        <Rating name="rating" defaultValue={avgreviews}  precision={0.5} size="large"  readOnly/>  &nbsp;&nbsp;&nbsp; <span className='mt-1'>{review?.length}Rating</span>
        </div>
        <div></div>
        <li>{item.OwnerName}</li>
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
        </div>:<Skeleton variant="rectangular" width={210} height={60} />
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

export default Servicedetail;
