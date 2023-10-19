'use client'
import React, { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import axios from "axios";
import  {useCookies} from 'react-cookie'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Userprofile() {


  const [expanded, setExpanded] = useState(false);
  const [cookie] = useCookies(["access_token"])
  const[user,setuser]=useState()

  console.log(user);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(()=>{ 
    const profile=async()=>{
      try{

        const userData= await axios.get('http://127.0.0.1:8000/api/user/profile', {
         headers:{
           Authorization:`Bearer ${cookie.access_token}`
         }
        })
        console.log(userData.data)
         setuser(userData.data.data)
         
      }catch( error ){
        console.log(error.message)

      }
   
  }
  profile()
},[])


 
  return (
    <Card sx={{width:"50vh"  }}  className="text-center" >
      

{user?.map((item)=>(<Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  key={item._id}
  spacing={2}
>   <CardContent >
          <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />       
      <h2>{item.Username}</h2>     
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

        </CardContent>
      </Collapse>

      </Stack>
))
}


    </Card>
  );
}
