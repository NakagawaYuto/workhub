import React from 'react';
import { Card, Button, Fab, } from '@mui/material';
import {Link} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

function Homepage() {
  // function applymove() {
  // <Link to={"/Apply"}></Link>
  // }
  return (
    <div>
      <Card className="alu">
        <h2>title</h2>
        <p>2024/03/12</p>
        <p>古田智寛</p>
        <p>~2024/03/20</p>
        <p>ブロックチェーン</p>
        <Link to='/apply' style={{ textDecoration: 'none', bottom: '20px', right: '20px' }}>
            <p>詳細</p>
        </Link>
      </Card>

      <Fab color='primary' aria-label='add' style={{ textDecoration: 'none', position: 'fixed', bottom: '20px', right: '20px' }}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Homepage;
