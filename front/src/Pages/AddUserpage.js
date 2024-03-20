import React from 'react';
import useState from 'react';
import axios from "axios";
import { Container, Typography, Card, CardContent, Grid, Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8080/Applicants/"

const AddUserpage = () => {
  const [name, setName] = useState('');
  
  const addApplicant = async () => {
    const newApplicant = {
      name: name,
    };

    try {
      const response = await axios.post(baseURL, newApplicant);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // const navigate = useNavigate();
  // const [name, setName] = useState('');
  
  // const addApplicants = async () => {
  //   const nameOk = name.length !== 0;
    
  //   if ( nameOk ) {
  //     await axios.post(baseURL, {
  //       name: String(name),
  //     })
  //     .then(() => {
  //       setName('');
        
  //       navigate('/edit');
  //     })
  //   }
  // }



  return (
    <Container>
    <form>       
      <div className="sendName">
        <input placeholder="名前を入力してください．" type="text" />
      </div> 
    </form>
    
    <Box sx={{ flexGraw: 1}}>
      {/* <TextField
          fullWidth
          variant='outlined'
          placeholder='名前'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ mb: 4 }}
        />
        <Link to={`/apply`} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
            color='primary'
            onClick={addApplicant}
            sx={{
              position: 'absolute',
              right: 0,
              bottom: -120,
              width: '150px',
              height: '50px',
            }}
          >
            <Typography variant="h6">
              追加
            </Typography>
          </Button>
        </Link> */}
      <Grid container spacing={ 2 } justifyContent='center'>
        <Grid item x5={12} md={6}>
          <Link to={'/apply'} style={{ textDecoration: 'none' }}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography color='textSecondary'>応募する</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
    
    <Grid container spacing={4}>
        <Link to={`/apply`} style={{ textDecoration: 'none' }}>
          <Button style={{ textDecoration: 'none', position: 'fixed', bottom:'10px', left: '10px' }}
            variant='contained'
          >
            <Typography variant="h7">
              戻る
            </Typography>
          </Button>
        </Link>
      </Grid>
  </Container>

  )
}

export default AddUserpage