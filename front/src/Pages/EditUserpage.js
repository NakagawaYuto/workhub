import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const applyURL = "http://127.0.0.1:8080/Applicants/"


function EditUserpage() {
  const [posts, setPosts] = useState([]);


  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       axios.get(applyURL).then((response) => {
  //         setPosts(response.data);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // const deleteName = (id) => {
  //   console.log(applyURL+String(id)+'/');
  //   axios.delete(baseURL+String(id)+'/')
  //   .then(() => {
  //     setName([]);
  //     axios.get(baseURL).then((response) => {
  //       setName(response.data);
  //     });
  //   })
  // }
  

  return (
    <Container>
      <form>
        <div className="sendName">
          <input placeholder="名前の変更" type="text" />
        </div> 
      </form>

      {/* <BlogCardsEdit 
        Blogs={blogs} 
        delTarget={setDelTarget}
      /> */}



      <Grid>
        <Link to={`/applicants/1/delete`} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
          >
            <Typography variant="h7">
              削除
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid>
        <Link to={`/post/`} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
          >
            <Typography variant="h7">
              完了
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid>
      <Link to={`/`} style={{ textDecoration: 'none', position: 'fixed', bottom:'10px', left: '10px' }}>
        <Button
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

export default EditUserpage