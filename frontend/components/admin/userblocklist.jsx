'use client'
import React, { useEffect } from 'react'
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { adminBlockUser, adminGetBlockuser } from "@/redux/features/adminredux/adminfeatures";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
function preventDefault(event) {
  event.preventDefault();

}

export default function UserBlocklist() {
    const users=useSelector((state)=>state.admin.Userblock.data) 
    // console.log(userblock)
    // console.log(users)
    const dispatch=useDispatch()
    useEffect(()=>{

        dispatch(adminGetBlockuser())
    },[])
    const handlebBlock=(id)=>{
      dispatch(adminBlockUser(id))
     
        dispatch(adminGetBlockuser())


      
        dispatch(adminGetBlockuser())

      
      

    }
  return (
    <React.Fragment>
      <div className='row'>

      {users?.map((item)=>(

      <Grid className='col-lg-3 col-md-6 mt-5' >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"center",
            height: 240,
          }}
        >
          <Avatar
  alt="Remy Sharp"
  src={item.avatar}
  sx={{ width: 56, height: 56 }}
/>
          <Typography component="p" variant="h5">{item?.Username}</Typography>
          <Typography color="text.secondary" >{item.Email} </Typography>
          <Typography color="text.secondary" >{item.MobileNumber} </Typography>
          <Button style={{background:(item.isBlock==true)?"green":"red",color:"white"}} onClick={()=>{handlebBlock(item?._id)}}>{item.isBlock==true? "unBlock": "Block"}</Button>

          <div>
            <Link color="primary" href="#" onClick={preventDefault}></Link>
          </div>
        </Paper>
      </Grid>
            ))

}
</div>
    </React.Fragment>
  );
}
