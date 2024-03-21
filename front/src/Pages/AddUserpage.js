import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:8080/applicants/';

const AddUserpage = () => {
  const navigate = useNavigate();
  const [post_id, setPost_id] = React.useState('');
  const [applicant_name, setApplicant_name] = React.useState('');
  
  const addApplicant = async () => {
    const post_idOk = post_id.length !== 0;
    const applicant_nameOk = applicant_name.length !== 0;
   
    if (post_idOk && applicant_nameOk) {
      await axios.post(baseURL, {
        post_id: String(post_id),
        applicant_name: String(applicant_name),
        
      })
      .then(() => {
        setPost_id('');
        setApplicant_name('');
        navigate('/apply');
      })
    }
  }
  return (
    <>
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid container alignItems='center' justify='center' direction="column">
        <Grid item>
          <Typography 
            variant="h4" 
            style={{ 
              margin: 20, 
              fontFamily:'serif' 
            }}
          >
            アルバイト募集!
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="id"
            multiline
            maxRows={4}
            style={{ 
              margin: 20, 
              fontFamily:'serif',
              width: '50vw',
            }}
            onChange={(e)=>{setPost_id(e.target.value)}}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-multiline-flexible"
            label="おname"
            multiline
            maxRows={4}
            style={{ 
              margin: 20, 
              fontFamily:'serif',
              width: '50vw',
            }}
            onChange={(e)=>{setApplicant_name(e.target.value)}}
          />
        </Grid>
        
        <Grid item>
          <Button 
            variant="contained" 
            onClick={() => {
              addApplicant();
            }}
            style={{
              width: 100,
              color: "#e0f2f1",
              fontSize: 25,
              fontFamily: 'serif',
              background: "#3c3c3c",
              padding: 3,
              borderRadius: 5,
              boxShadow: '5px 5px 5px rbga(0,0,0,0.3)',
            }}
            size="large"
          >応募!</Button>
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default AddUserpage;