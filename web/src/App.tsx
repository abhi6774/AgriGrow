import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './homeComponent';

export default function App() {

  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user)

  return (
    // isAuthenticated && (
    //   <Home />
    // )

    <Box>
      <button onClick={(e) => loginWithRedirect()}>Log In</button>  
    </Box>
);
}