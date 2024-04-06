import { Box, TextField, Button } from "@mui/material"

export default function App() {
    return <div style={{scale:"1.05"}}>
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
}