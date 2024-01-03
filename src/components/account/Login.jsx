import React from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import {useState} from 'react'
import logo from '../../images/logo.png'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    // background: #FB641B;
    // color: #fff;
    height: 40px;
    border-radius: 2px;
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 40px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    color: #878787;
    font-size: 15px;
`

function Login() {
  const [account, toggleAccount] = useState('login');

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }

//   const toggleLogin = () => {
//     toggleAccount('login');
//   }

  return (
    <Component>
      <Box>
        <Image src={logo} alt="logo" height={100} width={200} objectFit='contain'/>
        {
            account === 'login' ?
            <Wrapper>
                <TextField id="standard-basic" label="Enter Email" variant="standard" />
                <TextField id="standard-basic" label="Enter Pasword" variant="standard" />
                <LoginButton variant="contained">Login</LoginButton>    
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SignupButton onClick={() => toggleSignup()}>Create An Account</SignupButton>
            </Wrapper> 
            :
            <Wrapper>
                <TextField id="standard-basic" label="Enter Name" variant="standard" />
                <TextField id="standard-basic" label="Enter Email" variant="standard" />
                <TextField id="standard-basic" label="Enter Pasword" variant="standard" />
                <SignupButton variant="contained">Signup</SignupButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <LoginButton onClick={() => toggleSignup()} variant="contained">Already have an Account</LoginButton>
            </Wrapper>
        }
      </Box>
    </Component>
  )
}

export default Login;
