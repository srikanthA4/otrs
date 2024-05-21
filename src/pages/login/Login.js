// import React from 'react'
// import './login.css';
// import autointlogo from './auto-intelli-logo.png'

// const Login = () => {
//   return (
//     <div className='login'>
//         <div className="header">
//             <div className="logo">
//                 <img src={autointlogo} alt="" />
//             </div>
//         </div>
//         <div className="content">
//             <div className="login-container">
//                 <div className="div1">
//                     <h3>Login</h3>
//                     <a href="">Don't have an account?</a>
//                 </div>
//                 <div className="signinForm">
//                     <form action="">
//                         <label htmlFor="">Email Address</label>
//                         <input type="text" placeholder='User name or Email address' />
//                         <label htmlFor="">Password</label>
//                         <input type="password" placeholder='Password' />
//                         <div className="div2">
//                             <div className='check'>
//                                 <input type="checkbox" />
//                                 <label htmlFor="">keep me signed in</label>
//                             </div>
//                             <a href="">Forgot Password?</a>
//                         </div>
//                         <button>Login</button>
//                     </form>

//                 </div>
//             </div>
//         </div>
//         <div className="footer">
            
//         </div>
        
        
//     </div>
//   )
// }

// export default Login

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './login.css';

import  { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import DataContext from './context/DataContext';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.autointelli.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();

const Login = () => {
    // const { userRef, errRef, user, setUser, pwd, setPwd, errMsg, setErrMsg} = useContext(DataContext);
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    const navigate = useNavigate('/dash')

    
  useEffect(() => {
      setErrMsg('')
  },[user,pwd])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        try{
          setUser('');
          setPwd('');
          navigate('/dash');
        } catch(err){
            setErrMsg(err.message)
            errRef.current.focus();
        }  
      };

  return (
    <div className='login'>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="user"
            //   autoComplete="email"
            autoComplete='off'
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // href='/dash'
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    
        
    </div>
  )
}

export default Login



