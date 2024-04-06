import * as React from 'react';
import { TextField } from '@mui/material';
//import Typography from '@mui/material/Typography';
import {Box , Button} from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import { Scale } from '@mui/icons-material';
//import Home from './homeComponent';

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
    
    <div style={{scale:"1.2"}}>
      <Box
        sx={{
          backgroundColor: '#FFFFFF', 
          color: '#1e88e5 ',
          padding: '8px',
          margin: '5px auto',
          maxWidth: '500px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <h2>Complete Your Details</h2>
      </Box>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          padding: '20px',
          margin: '20px auto',
          maxWidth: '400px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <form>
          <TextField id="name" label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField id="email" label="Region" variant="outlined" fullWidth margin="normal" />
          <TextField id="password" label="Field Area" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </div>

    //<button style={{display:"none"}} onClick={(e) => loginWithRedirect()}>Log In</button> //
);
}