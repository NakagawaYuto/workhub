import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, Fab, Box } from '@mui/material';
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const baseURL = 'http://127.0.0.1:8080/post/';

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        axios.get(baseURL).then((response) => {
          setPosts(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{ flexGraw: 1}}>
        <Grid container spacing={ 2 } justifyContent='center'>
          <Grid item x5={12} md={6}>
            {posts.map((post) => (
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
            ))}
          </Grid>
        </Grid>
      </Box>
      <Link to='/apply' style={{ textDecoration: 'none', position: 'fixed', bottom: '20px', right: '20px' }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>
    </Container>
  );
};

export default Homepage;
