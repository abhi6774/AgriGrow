import * as React from 'react';
import { useState } from 'react'
import { TextField } from '@mui/material';
// import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './homePage';
import Form from "./components/form"

export default function App() {

  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [needsform, setneedsform] = useState(true)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // console.log(user)

  const datamain =
  {
    name: "aryankarma",
    email: "aryankarma20@gmail.com",
    land_area: 546,
    state: "Madhya Pradesh",
    crop_name: "Wheat"
  }

  // set user.email
  const mailtemp = "Trey.Larkin@gmail.com";

if (user) {
  fetch("http://localhost:3000/api/v1/farmer/getbyemail", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: mailtemp })
  })
  .then(async response => {
    if (!response.ok) {
      return 
    }

    const textData = await response.text()
    if(textData == ""){
      setneedsform(true)
    }else{
      setneedsform(false)
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

// add this in form
// fetch("http://localhost:3000/api/v1/signup/", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(datamain)
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


// remove code
// if(needsform){
//   console.log("the user needs form")
// }else{
//   console.log("the user doesn't needs form")
// }

return <div>
  {isAuthenticated ? <Home componentData={needsform}/> : <button onClick={(e) => loginWithRedirect()}>Log In</button>}
</div> 
}