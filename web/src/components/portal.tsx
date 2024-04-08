import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import ShowComponent from './ShowComponent'

export default function portal(){

    const [component, setRenderComponent] = useState(true)
    
    // console.log(component)

    return <Box sx={{width: "100vw", height: "100vh"}}>
        <Box sx={{fontSize:"22px", maxWidth:"100vw", padding:".5rem 1rem", boxShadow:"0 0 15px #999"}}>
            <Box sx={{ display: "flex" , top: "10%" , justifyContent:"space-between"}}>
                
                <div onClick={() => setRenderComponent(true)}> 
                    <HomeIcon fontSize="large"/>
                </div>
                <div onClick={() => setRenderComponent(false)}>
                    <PersonIcon fontSize="large" />
                </div>
            
            </Box>
        </Box>

        {/* <Nav /> */}

        <ShowComponent somePropName={component} />

    </Box> 
    
}