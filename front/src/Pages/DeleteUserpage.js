import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Button } from '@mui/material';
import {Link} from "react-router-dom";
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const DeleteUserpage = () => {
  const applyURL = "http://127.0.0.1:8080/applicants/1";
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [applicants,setApplicants] = useState([]);
  const [posts, setPosts] = useState({});

  
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

  const deleteApplicants = async (id) => {
    try {
      const response = await axios.delete(`applyURL${id}`);
        console.log('データが正常に削除されました', response.data);
      } catch(error) {
        console.error('データの削除に失敗しました', error);
      }
  };

  return (
    <Container>
      <Grid>
        <Typography>本当に削除しますか?</Typography>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <Button variant='contained' onclick={deleteApplicants(applicants.post_id)}>
            <Typography variant="h7">
              削除
            </Typography>
          </Button>
        </Link>
        <Link to={`/applicants/:id`} style={{ textDecoration: 'none' }}>
          <Button variant='contained'>
            <Typography variant="h7">
              キャンセル
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  );
}
    
export default DeleteUserpage;
