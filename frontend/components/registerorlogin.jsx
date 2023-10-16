import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import  {useCookies} from 'react-cookie'
import { useRouter } from "next/navigation";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// import Container from '@mui/material/Container';


const style = {
  // display:"container",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 390,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 40,
  p: 4,

};

// Adjust the top margin for content alignment
const contentStyle = {
  my: 4, // Adjust the top margin here
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#040333',
  fontWeight:"bold"
};

export default function RegisterOrLogin() {
  const [open, setOpen] = useState(false);
  const [signup,setsignup]=useState(true)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [_,setCookies ] = useCookies(["access_token"])
  const router=useRouter()


  const handleregister= async (event)=>{
    // event.preventDefault()

    const Username=event.target.username.value
    const Mobile=event.target.mobile.value
    const Email=event.target.email.value
    const Password=event.target.password.value
    console.log(Username);


    try{
      await axios.post('http://127.0.0.1:8000/api/user/register',{
        username:Username,
        mobilenumber:Mobile,
        email:Email,
        password:Password,

      })
    }catch(error){
      

    }
  }

const handleLogin= async(event)=>{
  event.preventDefault()

  const Username=event.target.username.value
  const Password=event.target.password.value
  console.log(Username);

  try {
    const response=await axios.post('http://127.0.0.1:8000/api/user/login',{
      username:Username,
      password:Password

    })
    console.log(response);
    alert(response.data.message)
   
    // router.push('/user')
    handleClose()

  } catch (error) {
    
  }




}






  return (
    <div>
      <Button onClick={handleOpen} style={{ color: 'white', background: 'transparent' ,color:"#040333" ,fontWeight:"bold", boxShadow:"none" }}>
        Login/Signup
      </Button>

    {(signup==true)?  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
             {/* <Container fixed> */}

        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '10px',
              zIndex: 1,
              color: '#040333',
            }}
          >
            <CloseIcon />
          </Button>
          <Box sx={contentStyle}>
            <Typography component="h2" variant="h4"  >
            Welcome          </Typography>
           
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleregister}  method='post'  >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                InputProps={{
                 
                }}
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="number"
                autoComplete="Mobile Number"
                InputProps={{
                 
                }}
              />
              
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputProps={{
                 
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
            
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" style={{ background: '#040333', color: 'white' }} sx={{ mt: 3, mb: 2 }}>
                Signup
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={()=>setsignup(signup=>!signup)}>
                    {"Already  have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        {/* </Container> */}

      </Modal>: <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '10px',
              zIndex: 1,
              color: '#040333',
            }}
          >
            <CloseIcon />
          </Button>
          <Box sx={contentStyle}>
            <Typography component="h2" variant="h4"  >
            Welcome          </Typography>
            <Typography component="h6"  className='text-center'>
            Your Trusted Local Services Directory             </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleLogin} method='post' >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                InputProps={{
                 
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
            
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" style={{ background: '#040333', color: 'white' }} sx={{ mt: 3, mb: 2 }}>
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={()=>setsignup(signup=>!signup)}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
}
      </div>

  );
}