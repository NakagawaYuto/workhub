import React, {useState} from 'react';
import { Card, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SendName from './components/SendName.js';

const Applypage = () => {
  const [user, setUser] = useState();

  const updateName = () => {
    setUser("古田"); 
  }

  
  return (
    <div>
      <Card className="alu">
        <p>アルバイト情報</p>
        <Button>編集する</Button>
      </Card>

      <p>応募中：{user} </p>

      <form>
        <div className="sendName">
          <input placeholder="学籍番号と名前を入力してください．" type="text" />
        </div> 
      </form>
      <button onClick={updateName}>
        Set Name
      </button>
      <SendName />
    </div>
  );
};

export default Applypage;