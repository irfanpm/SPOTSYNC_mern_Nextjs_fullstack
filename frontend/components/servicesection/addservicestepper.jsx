'use client'
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  Autocomplete,
  StepLabel,
  Modal,
  Fade,
  Box,
  Grid,
  Card,
  CardMedia,
  IconButton,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import ImageUploader from './imageuploader';
import axios from "axios"
import { getCookie } from "cookies-next";
import { useSelector,useDispatch } from 'react-redux';
import { deletearray,deleteImage } from '@/redux/features/serviceimage';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from "next/navigation";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const useStyles = styled((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },

}));

function getSteps() {
  return [
    "Basic Service information",
    "Address Information",
    "Upload Images",
    "Location",
  ];
}
const BasicForm = () => {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { control } = useFormContext();
  return (
    <div >
      <Controller
        control={control}
        name="Servicename"
        render={({ field }) => (
          <TextField
            id="service-name"
            label="Service Name"
            variant="outlined"
            placeholder="Enter Your Service Name"
            sx={{ m: 1, width: '45%' }}
                 margin="normal"
            {...field}
          />
        )}
      />
         <Controller
        control={control}
        name="companyname"
        render={({ field }) => (
          <TextField
            id="company-name"
            label="companyname"
            variant="outlined"
            placeholder="Enter Your Company Name"
            sx={{ m: 1, width: '45%' }}
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="ownerfirst"
        render={({ field }) => (
          <TextField
            id="ownerfirst"
            label="ownerfirst"
            variant="outlined"
            placeholder="Enter Your Owner firstname"
            sx={{ m: 1, width: '21.5%' }}
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="ownerlast"
        render={({ field }) => (
          <TextField
            id="owner-last"
            label="lastname"
            variant="outlined"
            placeholder="Enter Your Owner Last Name"
            sx={{ m: 1, width: '22%' }}
            margin="normal"
            {...field}
          />
        )}
      />
        <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Service Phone Number"
            variant="outlined"
            placeholder="Enter Your  Service Phone Number"
            sx={{ m: 1, width: '45%' }}
            margin="normal"
            {...field}
          />
        )}
      />
     
       <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <TextField
          name='description'
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                sx={{ m: 1, width: '45%' }}
                margin="normal"
                id='description'
                {...field}
                />
                )}
      />
                <Controller
                 control={control}
                 name="category"
                 render={({ field }) => (
                   <FormControl  sx={{ m: 1, width: '45%' }} variant="outlined"  >
                 <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                 <NativeSelect
                   id="demo-customized-select-native"
                   value={age}
                   onChange={handleChange}
                   {...field}
         
                 >
                   <option aria-label="None" value="" />
                   <option value='hospital'>Hospital</option>
                   <option value="education">Education</option>
                   <option value=  "docter">Doctors</option>
                   <option value= "repair">Repairs</option>
                   <option value= "beautyspa">beautyspa</option>
                   <option value=  "events">events</option>
                   <option value= "hotel" >hotel</option>
                   <option value= "logistics">logistics</option>
                   <option value= "gym" >gym</option>
                   <option value=  "shop" >shop</option>
                   <option value= "more" >more</option>








                 </NativeSelect>
               </FormControl>
                    )}
                    />
      {/* <Controller
        control={control}
        name="companyname"
        render={({ field }) => (
          <TextField
                name='description'
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                sx={{ m: 1, width: '45%' }}
                margin="normal"
                id='description'
            {...field}
          />
        )}
      />
     */}
    </div>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            sx={{ m: 1, width: '45%' }}

            margin="normal"
            {...field}
          />
        )}
      />

    
      <Controller
        control={control}
        name="streetaddress"
        render={({ field }) => (
            <TextField
            name='street'
            label="Street address"
            variant="outlined"
            sx={{ m: 1, width: '45%' }}

            margin="normal"
            id='street'
            {...field}
          />
          
        )}
      />
        <Controller
        control={control}
        name="city"
        render={({ field }) => (
          
            <TextField
            label="city"
            id="city"
            name="city"
            sx={{ m: 1, width: '22%' }}
            {...field}
          />
          
        )}
      /> 
             <Controller
        control={control}
        name="zipcode"
        render={({ field }) => (
          
            <TextField
            label="Zip code"
            id="zip"
            name="zip"
            sx={{ m: 1, width: '21.5%' }}
            {...field}
          />
          
        )}
      />
         <Controller
        control={control}
        name="state"
        render={({ field }) => (
          
          <TextField
          label="state"
          id="state"
          name="state"
            sx={{ m: 1, width: '22%' }}
            {...field}
          />
          
        )}
      />
       <Controller
        control={control}
        name="landmark"
        render={({ field }) => (
          
          <TextField
          label="LandMark"
          id="landmark"
          name="landmark"
            sx={{ m: 1, width: '22%' }}
            {...field}
          />
          
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          
          <TextField
          name='address'
          label="Address"
          variant="outlined"
          multiline
          rows={3}
        
          fullWidth
          margin="normal"
          id='address'
            sx={{ m: 1, width: '45%' }}
            {...field}
          />
          
        )}
      />
      {/* <div style={{ margin:"1px", width: '45%' }} className="row text-center ">
        <Controller
        control={control}
        name="mon"
        render={({ field }) => (
          
          <TextField
          label="mon"
          id="mon"
          name="mon"
            // sx={{ m: 1, width: '10%' }}
            className="col-md-3"
            {...field}
          />
          
        )}
      />
        <Controller
        control={control}
        name="tue"
        render={({ field }) => (
          
          <TextField
          label="Tue"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10%' }}

            {...field}
          />
          
        )}
      />
           <Controller
        control={control}
        name="wed"
        render={({ field }) => (
          
          <TextField
          label="wed"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10%' }}

            {...field}
          />
          
        )}
      />
           <Controller
        control={control}
        name="thu"
        render={({ field }) => (
          
          <TextField
          label="thu"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10%' }}
            {...field}
          />
          
        )}
      />
        
       
        <Controller
        control={control}
        name="city"
        render={({ field }) => (
          
          <TextField
          label="fri"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10%' }}
            {...field}
          />
          
        )}
      />
        <Controller
        control={control}
        name="city"
        render={({ field }) => (
          
          <TextField
          label="sat"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10%' }}
            {...field}
          />
          
        )}
      />
        <Controller
        control={control}
        name="sun"
        render={({ field }) => (
          
          <TextField
          label="sun"
          id="city"
          name="city"
          className="col-md-3"

            // sx={{ m: 1, width: '10.5%' }}
            {...field}
          />
          
        )}
      />
      </div> */}


    </>
  );
};
const PersonalForm = () => {
  const image1=useSelector((state)=>state.image.image)
  const [openModal, setOpenModal] = useState(false);
  const [viewedImage, setViewedImage] = useState(null);
const dispatch=useDispatch()
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleImageClick = (image) => {
    setViewedImage(image);
    setOpenModal(true);
  };

  const { control } = useFormContext();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center"}} className="flex-column text-center">
   <div className="d-flex">

    <ImageUploader/>
   </div>
       { image1.length!=0?<h4>uploaded image</h4>:null}
      <div className='row '>
        
        {image1?.map((image, index) => (
          <Grid item key={index}   className='col-md-3 mt-2 '      >
            <Card variant="outlined" className='text-center'>
              <CardMedia
                component="img"
                alt={`Uploaded Image ${index + 1}`}
                image={image}
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer' }}
              />
                <Typography variant="body2" color="textSecondary">
                </Typography> 
                 <IconButton
                  onClick={() => dispatch(deleteImage(index))}
                  color="secondary"
                 
                >
                  <DeleteIcon/>
                </IconButton>
            </Card>
          </Grid>
        ))}
        
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
        <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
       
              bgcolor: 'background.paper',
              boxShadow: 24,
              // p: 3,
            }}
          >
            {viewedImage && (
              <img
                src={viewedImage}
                alt="Viewed Image"
                style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }}
                onClick={handleCloseModal}
              />
            )}
          </Box>
        </Fade>
      </Modal>


      {/* </Modal> */}

      </div>

    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      {/* <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const image1=useSelector((state)=>state.image.image)
  const dispatch=useDispatch()

  const cookie = getCookie('token');
  const router=useRouter()

  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      Servicename: "",
      companyname: "",
      ownerfirst: "",
      ownerlast: "",
      phone: "",
      category: "",
      description: "",
      emailAddress: "",
      streetaddress: "",
      landmark:"",
      zipcode: "",
      state: "",
      city: "",
      address:""
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = async(data) => {
    console.log(data);
    // console.log(data.Servicename)
    if (activeStep == steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     console.log(res);
      //     setActiveStep(activeStep + 1);
      //   });
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/service/addservice', {
          servicename: data.Servicename,
          ownername:data.ownerfirst+""+data.ownerlast,
          phone:data.phone,
          category:data.category,
          descriptioon:data.descriptioon,
          streeaddress:data.streetaddress,
          state:data.state,
          city:data.city,
          zipcode:data.zipcode,
          address:data.address,
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
                setActiveStep(activeStep + 1);


      // router.push('/Serviceprovider/serviceprofilepage')

    } else {
      setActiveStep(activeStep + 1);
      // setSkippedSteps(
      //   skippedSteps.filter((skipItem) => skipItem !== activeStep)
      // );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    // if (!isStepSkipped(activeStep)) {
    //   setSkippedSteps([...skippedSteps, activeStep]);
    // }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {

          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div className="d-flex align-items-center flex-column">
          <img src="/Check animation.gif" alt="image" srcset="" className="w-25" />

        <Typography variant="h5" align="center">
          
        Successfully Added Services
        </Typography>
        <Button style={{color:"black"}} onClick={()=>{ router.push('/Serviceprovider/serviceprofilepage')}}>Home</Button>
        </div>
      ) : (
        <>
          <FormProvider {...methods}   >
            <form onSubmit={methods.handleSubmit(handleNext)} >
              {getStepContent(activeStep)}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{background:"red",color:"white"}}
              >
                <NavigateBeforeIcon/>
                back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  style={{background:"red"}}

                >
                  skip
                </Button>
              )} */}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                style={{background:"red"}}

                type="submit"
              >
               
                {activeStep === steps.length - 1 ? "Finish" :<> Next <NavigateNextIcon/></>}
              </Button>
              </div>

            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;

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
