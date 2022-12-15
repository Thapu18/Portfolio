import React,{useState,useEffect} from 'react';
import { Stack,Box,Typography,Button,ThemeProvider } from '@mui/material';

import { errorTypography } from '../material UI/typography';
import { formBtnTheme } from '../material UI/ButtonTheme';


const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [validEmail, setValidEmail] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(()=>{
    // ContactAnim();
  },[])

  useEffect(()=>{
    let result = mailformat.test(email);
    setValidEmail(result);
  },[email]);

  const handleName = (e) =>{
    setNameError(false);
    setName(e.target.value)
  } 

  const handleEmail = (e) =>{
    setEmailError(false);
    setEmail(e.target.value)
  } 

  const handleMessage = (e) =>{
    setMessageError(false);
    setMessage(e.target.value)
  } 

  const submitForm = (e) => {
    e.preventDefault();
    if(name.length<2){
      setNameError(true);
      return;
    }
    if(!validEmail || !email){
      setEmailError(true);
      return;
    }
    if(!message){
      setMessageError(true);
      return;
    }
    if(name && email && message){
      console.log(
        {
          'name':name,
          'email':email,
          'message':message
        }
      )
      setName('');
      setEmail('');
      setMessage('');
    }
    return;
  }

  return (
    <Box
    className='contact-middle-section'>
     <form
     className='contact-form-section'>
      <Box
      className='input-container'>
        <input 
          type='name'
          placeholder='Enter your name'
          name='clientName'
          className='input'
          autoComplete='off'
          onChange={handleName}
          value={name}
        />
        {nameError && 
          <ThemeProvider theme={errorTypography}>
            <Typography>
              enter your name
            </Typography>
          </ThemeProvider>
          }
        <input
            type='email'
            placeholder='Enter your email'
            name='clientEmail'
            className='input'
            value={email}
            required
            onChange={handleEmail}
          />
          {emailError && 
            <ThemeProvider theme={errorTypography}>
              <Typography>
                enter your email correctly
              </Typography>
            </ThemeProvider>
          }
      </Box>
      <Box
      className='textarea-container'>
        <textarea
          className='textarea'
          name="message"
          id=""
          rows="7"
          placeholder='message'
          value={message}
          onChange={handleMessage}>
        </textarea>
        {
          messageError &&
          <ThemeProvider theme={errorTypography}>
            <Typography>
              enter your message
            </Typography>
          </ThemeProvider>
        }
      </Box>
     </form>
        <ThemeProvider theme={formBtnTheme}>
          <Button>
            Send
          </Button>
        </ThemeProvider>
    </Box>
  )
}

export default Form;