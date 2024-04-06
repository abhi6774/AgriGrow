import { Box, Link } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function Nav() {
  return (
    <Box sx={{fontSize:"22px",width:"100vw", margin:"auto", backgroundColor:"red"}}>
      <Box sx={{ outline:"1px solid black", display: "flex" , top: "10%" , justifyContent:"space-between"}}>
        <Box>Logo</Box>
        <Box>
          <PersonIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
