import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const baseURL = "http://127.0.0.1:8080/Applicants/"

function EditUserpage() {
  // const [name, setName] = React.useState(null);
  // const [delTarget, setDelTarget] = React.useState(null);

  // // 初回ロード時の処理を記述する.
  // React.useEffect(() => 
  //   {
  //     axios.get(baseURL).then((response) => {
  //       setName(response.data);
  //     });
  //   }, []);
  // if (!applicants) return null;

  // const deleteName = (id) => {
  //   console.log(baseURL+String(id)+'/');
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
        <Link to={`/delete`} style={{ textDecoration: 'none' }}>
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
        <Link to={`/apply`} style={{ textDecoration: 'none' }}>
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
      <Link to={`/apply`} style={{ textDecoration: 'none', position: 'fixed', bottom:'10px', left: '10px' }}>
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