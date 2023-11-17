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


const useStyles = styled((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },

}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}
const BasicForm = () => {
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
            sx={{ m: 1, width: '29ch' }}
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
            sx={{ m: 1, width: '29ch' }}
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
        name="category"
        render={({ field }) => (
          <Autocomplete
          sx={{ m:1, width: '45%' }}


          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField
                      {...params} label="Category"
              id='category'
              name='category'
               margin="normal"
                {...field}  />}
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
        {/* <Controller
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
      /> */}
             <Controller
        control={control}
        name="zipcode"
        render={({ field }) => (
          
            <TextField
            label="Zip code"
            id="zip"
            name="zip"
            sx={{ m: 1, width: '25%' }}
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
            sx={{ m: 1, width: '25%' }}
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
            sx={{ m: 1, width: '25%' }}
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


    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

    <ImageUploader/>
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
  const cookie = getCookie('token');
  const image1=useSelector((state)=>state.image.image)

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

      // dispatch(deletearray())
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
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
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
                style={{background:"red"}}
              >
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
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
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
