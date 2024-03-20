import React from 'react';
import { Fab } from '@mui/material';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>研究室アルバイト</h3>
        </div>
        <nav>
            <ul>
                <Link to='/' >
                    <Fab aria-label='add'>
                        <HomeIcon />
                    </Fab>
                </Link>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
