'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/features/getuser';
import { useRouter } from 'next/navigation';
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
import { styled } from '@mui/material/styles';
import Edit_avatar from './edit_avatar';
import { fetchService } from '@/redux/features/getService';


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
  const router = useRouter();
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.data);
  const loading = useSelector((state) => state.user.loading);
  const [expanded, setExpanded] = useState(false);
  console.log(user)

 


  
  useEffect(()=>{
    dispatch(fetchUser());
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      location.reload(false);
    }
} ,[])
      
    // Fetch user data when the component mounts
      
      
  


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '50vh' }} className="text-center">
      {

        user?.map((item) => (
          <Stack direction="column" justifyContent="center" alignItems="center" key={item._id} spacing={2}>
            <CardContent>
              
              <Avatar alt="Remy Sharp" src={item.avatar} sx={{ width: 56, height: 56 }} />        <Edit_avatar/>


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
              <CardContent>{/* Add content to display when expanded */}</CardContent>
            </Collapse>
          </Stack>
        ))
    }
    </Card>
  );
}
