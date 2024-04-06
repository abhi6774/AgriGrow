import { Box } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
// import Nav from "./Nav";
import ProfileView from "./ProfileView"
import PortalView from './PortalView';

export default function portal(){

    const [component, setRenderComponent] = useState("portalView")
    
    return <Box sx={{width: "100vw", height: "100vh"}}>
        <Box sx={{fontSize:"22px",width:"90vw",margin:"auto"}}>
        <Box sx={{ display: "flex" , top: "10%" , justifyContent:"space-between"}}>
            <Box>Logo</Box>
            <Box>
            <PersonIcon fontSize="large" />
            </Box>
        </Box>
        </Box>

        {/* <Nav /> */}
        
        

    </Box> 
    
}