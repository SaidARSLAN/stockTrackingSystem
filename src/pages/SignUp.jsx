import { Button, TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div className='w-full h-full flex items-center justify-center my-12'>
      <form className='w-full h-full flex items-center justify-start flex-col space-y-12'>
    <TextField id='filled-basic' label="Your Name and Surname" variant='standard' color='success' InputProps={{style: { color: 'white' }}} InputLabelProps={{style : { color : 'white'}}} style={{width:"25%", borderColor: 'white'}}></TextField>
    <TextField id='filled-basic' label="E-mail" variant='standard' color='success' InputProps={{style: { color: 'white' }}} InputLabelProps={{style : { color : 'white'}}} style={{width:"25%"}}></TextField>
    <TextField id='filled-basic' label="Password" variant='standard' color='success' InputProps={{style: { color: 'white' }}} InputLabelProps={{style : { color : 'white'}}} style={{width:"25%"}}></TextField>
    <TextField id='filled-basic' label="Password Confirm" variant='standard' color='success' InputProps={{style: { color: 'white' }}} InputLabelProps={{style : { color : 'white'}}} style={{width:"25%"}}></TextField>
    <Button variant='text' color='success' size='large'>Submit</Button>
    </form>
    </div>
  )
}

export default SignUp