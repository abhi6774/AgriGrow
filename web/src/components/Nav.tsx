import { Box, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function Nav() {
  return (
    <Box sx={{fontSize:"22px",width:"90vw",margin:"auto"}}>
      <Box sx={{ display: "flex" , top: "10%" , justifyContent:"space-between"}}>
        <Box>Logo</Box>
        <Box >
          <Link href="#">Home</Link>
          <Link href="#" sx={{margin:"0 42px"}}>About</Link>
          <Link href="#">Help</Link>
        </Box>
        <Box>
          <PersonIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
