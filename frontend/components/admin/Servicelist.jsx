'use client'
import React, { useEffect } from 'react'
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Paper } from "@mui/material";
import { adminBlockService, adminfetchService } from '@/redux/features/adminredux/adminfeatures';
function preventDefault(event) {
  event.preventDefault();

}

export default function Servicelist() {
    const services=useSelector((state)=>state.admin.service.data)
    console.log(services)
    const dispatch=useDispatch()
    useEffect(()=>{

        dispatch(adminfetchService())
    },[])
    const handlebBlock=(id)=>{
      dispatch(adminBlockService(id))
     
        dispatch(adminfetchService())
      
        dispatch(adminfetchService())

      
      

    }
  return (
    <React.Fragment>
      <div className='row'>
      {(services?.map((item)=>(

      <Grid className='col-lg-3 col-md-6 mt-5' >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            height: 300,
          }}
        >
          {/* <Avatar
  alt="Remy Sharp"
  src={item.avatar}
  sx={{ width: 56, height: 56 }}

/> */}
<img src={item?.Image[0]} alt="image" style={{width:"280px",height:"170px"}} />
          <Typography component="p" variant="h6">{item?.serviceName}</Typography>
          <Typography color="text.secondary" >{item.Category} </Typography>
          {/* <Typography color="text.secondary" >{item.Phone} </Typography> */}
          <Button  style={{background:(item.isBlock==true)?"green":"red",color:"white"}} onClick={()=>{handlebBlock(item?._id)}}>{item.isBlock==true? "unBlock": "Block"}</Button>

          <div>
            <Link color="primary" href="#" onClick={preventDefault}></Link>
          </div>
        </Paper>
      </Grid>
            )))

}
</div>
    </React.Fragment>
  );
}
