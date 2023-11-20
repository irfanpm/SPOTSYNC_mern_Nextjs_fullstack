"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Servicedetails } from "@/redux/features/showservicedetails";
import { showservice } from "@/redux/features/showservice";

import { useRouter } from "next/navigation";
import { getReview } from "@/redux/features/reviewdisplay";
import { Avgreview } from "@/redux/features/averagerating";
import { showfavourite } from "@/redux/features/showfavourite";
import { Box, Rating, Skeleton } from "@mui/material";

function Showservice({ category }) {
  
  const router = useRouter();

  const dispatch = useDispatch();
  const service = useSelector((state) => state.showservice.service.data);
  const avgreviews = useSelector((state) => state.avgreview.review.data);
console.log(avgreviews)

  useEffect(() => {
    dispatch(showservice(category));
   
  }, [service]);
  const handleshowservice = (id) => {
    dispatch(Servicedetails(id));
    dispatch(getReview(id));

    dispatch(showfavourite());


    router.push(`/user/servicedetails/${id}`);
  };
  console.log(service);
  return (
    <div className="row   m-3  ">
      <div className="col-md-7">
      {service?.map((data) =>
        data ? (
          
          <Card
            sx={{ display: "flex", height: "150px" }}
            className="mt-3 col-md-12"
            onClick={()=>{handleshowservice(data._id)}}
          >
            <CardMedia
              component="img"
              sx={{ width: 160 }}
              image={data.Image[0]}
              alt="Live from space album cover"
            />
            <div className="d-flex gap-5"  >
              <Box
                sx={{ display: "flex", flexDirection: "column" }}
                
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {data.serviceName}
                  </Typography>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="div"
                  >
                    <Rating name="read-only" value={data.Avgrating||5} readOnly />2 reviews
                    <p>Open-until 8:30pm</p>
                  </Typography>
                </CardContent>
              </Box>
              <div className="d-flex flex-column mt-4">
            
          
          
              </div>

            </div>
          </Card>

        ) : (
          <Skeleton variant="rectangular" width={210} height={60} />
        )
      )}
      </div>
        <Card variant="outlined" className="col-md-4 d-flex flex-column h-50">
              <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      </Typography>
      <Typography variant="h5" component="div">
        deyidfgefygd
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
              </Card>

    </div>
  );
}

export default Showservice;
