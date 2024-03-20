import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, Fab, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
//import SendName from './components/SendName.js';

const baseURL = 'http://127.0.0.1:8080/apply/';

const Applypage = () => {
  // const [users, setUsers] = useState();

  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       axios.get(baseURL).then((response) => {
  //         setUsers(response.data);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Container>
      {/* <Box sx={{ flexGraw: 1}}>
        <Grid container spacing={ 2 } justifyContent='center'>
          <Grid item x5={12} md={6}>
            {users.map((applicants) => (
              <Link to={`/applicants/${applicants.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant='h5'>{applicants.applicant_name}</Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box> */}
      <Link to='/add' style={{ textDecoration: 'none', position: 'fixed', bottom: '20px', right: '20px' }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>

    </Container>
  );
};

export default Applypage;