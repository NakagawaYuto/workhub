import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import {Link} from "react-router-dom";


function DeleteUserpage() {
  return (
    <Container>
      <Grid>
        <Typography>古田さんを削除しますか?</Typography>
        <Link to={`/apply`} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
          >
            <Typography variant="h7">
              削除
            </Typography>
          </Button>
        </Link>
    
        <Link to={`/edit`} style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
          >
            <Typography variant="h7">
              キャンセル
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Container>
  )
}

export default DeleteUserpage
