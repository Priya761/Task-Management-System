import React, {useState} from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import logo from '../../images/logo.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

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

// const singupInitialValues = {
//   name: '',
//   username: '',
//   password: ''
// }

function Login() {
  const [account, toggleAccount] = useState('login');
  // const [signup, setSignup] = useState[singupInitialValues];
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      await axios.post('http:/localhost:8080/')
      .then(res => {
        console.log(res);
        navigate('/');
    }).catch(err => console.log(err));
  }

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }

//   const toggleLogin = () => {
//     toggleAccount('login');
//   }

  const handleSignup = (e) => {
      e.preventDefault();

      axios.post('http://localhost:8080/', {name, email, password})
      .then(res => {
          console.log(res);
          navigate('/');
      }).catch(err => console.log(err));

    // console.log(e.target.value, e.target.name);
    // setSignup({...signup, [e.target.name] : e.target.value});
    // setSignup({
    //   [e.target.name] : e.target.value,
    //   [e.target.username] : e.target.value,
    //   [e.target.password] : e.target.value
    // });
  }

  return (
    <Component>
      <Box>
        <Image src={logo} alt="logo" height={100} width={200} objectFit='contain'/>
        {
            account === 'login' ?
            <Wrapper>
                <TextField onChange={e => setEmail(e.target.value)} id="standard-basic" name='username' label="Enter Email" variant="standard" />
                <TextField onChange={e => setPassword(e.target.value)} type='password' id="standard-basic" name='password' label="Enter Pasword" variant="standard" />
                <Link to='/tasks'>
                  <LoginButton variant="contained" onClick={e => handleLogin()}>Login</LoginButton>    
                </Link>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SignupButton onClick={(e) => toggleSignup(e)}>Create An Account</SignupButton>
            </Wrapper> 
            :
            <Wrapper>
                <TextField onChange={e => setName(e.target.value)} id="standard-basic" name='name' label="Enter Name" variant="standard" />
                <TextField onChange={e => setEmail(e.target.value)} id="standard-basic" name='username' label="Enter Email" variant="standard" />
                <TextField onChange={e => setPassword(e.target.value)} type='password' id="standard-basic" name='password' label="Enter Pasword" variant="standard" />
                <Link>
                  <SignupButton onClick={e => handleSignup(e)} variant="contained">Signup</SignupButton>
                </Link>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <LoginButton onClick={() => toggleSignup()} variant="contained">Already have an Account</LoginButton>
            </Wrapper>
        }
      </Box>
    </Component>
  )
}

export default Login;
