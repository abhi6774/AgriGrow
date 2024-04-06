import * as React from 'react';
import {useState} from 'react'
import { TextField } from '@mui/material';
// import Typography from '@mui/material/Typography';
import {Box , Button} from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './homePage';
import Form from "./components/form"

export default function App() {

  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  console.log(user)
  
  return  isAuthenticated ? <Home /> : <button onClick={(e) => loginWithRedirect()}>Log In</button> //
}