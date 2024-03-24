import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, Fab, Box, Button } from '@mui/material';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';



const Applypage = () => {
  const [applicants, setApplicants] = useState([]);
  const [post, setPost] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const params = useParams();
  const details_for_this_blog = []

  const baseURL = 'http://127.0.0.1:8080/post/' + String(params.id) + '/'; 
  const applyURL = 'http://127.0.0.1:8080/applicants/';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(applyURL).then((response) => { 
  //         setApplicants(response.data);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [params]);
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response1 = await axios.get(applyURL).then((response1) => {
            setApplicants(response1.data);
        });
        const response2 = await axios.get(baseURL).then((response2) => {
          setPost(response2.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params]);


  if (applicants !== null){
    for (let i = 0; i < applicants.length; i++) {
      if(applicants[i].post_id === parseInt(params.id)){
        details_for_this_blog.push(applicants[i])
        console.log(params);
      }
    }
  }


  return (
    <Container>
      <Box sx={{ flexGraw: 1}}>
        <Grid container spacing={ 2 } justifyContent='center'>
          <Grid item x5={12} md={6}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant='h5'>{post.title}</Typography>
                  <Typography color='textSecondary'>{post.hostname}</Typography>
                  <Typography color='textSecondary'>{post.deadline}</Typography>
                  <Typography color='textSecondary'>{post.date_and_location}</Typography>
                  <Typography color='textSecondary'>{post.num_of_people}</Typography>
                  <Typography color='textSecondary'>{post.estimated_time}</Typography>
                  <Typography color='textSecondary'>{post.target}</Typography>
                  <Typography color='textSecondary'>{post.tag}</Typography>
                  <Typography color='textSecondary'>{post.body}</Typography>
                  <Typography color='textSecondary'>{post.data_added}</Typography>
                </CardContent>
              </Card>
            </Link>
            <Typography color='textSecondary'>応募中：</Typography>
              {details_for_this_blog.map(applicants => (
                <Link to={`/applicants/${applicants.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography>{applicants.applicant_name}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={4}>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <Button style={{ textDecoration: 'none', position: 'fixed', bottom:'10px', left: '10px' }}
            variant='contained'
          >
            <Typography variant="h7">
              戻る
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Link to='/add' style={{ textDecoration: 'none', position: 'fixed', bottom: '20px', right: '20px' }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>
    </Container>
  );
}

export default Applypage;
