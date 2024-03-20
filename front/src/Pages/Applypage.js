import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid, Box, Button, Fab } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const baseURL = 'http://127.0.0.1:8080/applicants/';
//const postURL = 'http://127.0.0.1:8080/' + String(params.id) + '/';

const Applypage = () => {
  const [applicants, setApplicants] = useState([]);
  const [posts, setPosts] = useState([]);
  const { post_id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      try {
        axios.get(baseURL).then((response) => {
          setApplicants(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       axios.get(`${'http://127.0.0.1:8080/post/'}${post_id}/`).then((response) => {
  //         setPosts(response.data);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [post_id]);

  return (
    // <Container maxWidth="lg">
    //   <Box sx={{ mt: 6, mb: 6 }}>
    //     <Typography variant='h4' align='center'>
    //       {posts ? posts.name : 'Loading...'}
    //     </Typography>
    //   </Box>
    //   <Grid container spacing={4}>
    //     <Link to={`/`} style={{ textDecoration: 'none' }}>
    //       <Button
    //         variant='contained'
    //         sx={{
    //           position: 'relative',
    //           left: 30,
    //           top: -55,
    //           width: '65px',
    //           height: '40px',
    //           backgroundColor: 'white',
    //           color: 'black',
    //           borderColor: 'black',
    //           borderWidth: 2,
    //           borderStyle: 'solid'
    //         }}
    //       >
    //         <Typography variant="h7">
    //           戻る
    //         </Typography>
    //       </Button>
    //     </Link>
    //     <Grid item xs={12}>
    //       <Link to={`/post/${post_id}`} style={{ textDecoration: 'none' }}>
    //         <Button
    //           variant='contained'
    //           fullWidth
    //           sx={{
    //             height: 200,
    //             backgroundColor: 'white',
    //             color: 'black',
    //             borderColor: 'black',
    //             borderWidth: 2,
    //             borderStyle: 'solid'
    //           }}
    //         >
    //           <Typography variant='h5' align='center'>
    //             {posts ? (posts.name ? posts.name : 'テーマ') : 'Loading...'}
    //           </Typography>
    //         </Button>
    //       </Link>
    //     </Grid>
    //   </Grid>
    // </Container>
    <Container>
      <Box sx={{ flexGraw: 1}}>
        <Grid container spacing={ 2 } justifyContent='center'>
          <Grid item x5={12} md={6}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant='h5'>アルバイト情報</Typography>
              </CardContent>
            </Card>
            <Typography color='textSecondary'>応募中：</Typography>
              {applicants.map((applicants) => (
                <Link to={`/applicants/${applicants.id}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant='h5'>{applicants.applicant_name}</Typography>
                      <Link to={`/edit`} style={{ textDecoration: 'none' }}>
                        <Button
                          variant='contained'
                        >
                          <Typography variant="h7">
                            編集する
                          </Typography>
                        </Button>
                      </Link>
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
};

export default Applypage;

// const updateName = () => {
//   setUser("古田"); 
// }



// <div>
//     <Card className="alu">
//       <p>アルバイト情報</p>
//       <Button>編集する</Button>
//     </Card>

//     <p>応募中：{user} </p>

//     <form>
//       <div className="sendName">
//         <input placeholder="学籍番号と名前を入力してください．" type="text" />
//       </div> 
//     </form>
//     <button onClick={updateName}>
//       Set Name
//     </button>
//     <SendName />
//   </div>