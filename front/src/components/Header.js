import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>研究室アルバイト</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/Apply">応募</Link>
                </li>
                <li>
                    <a href="#">ホーム</a>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
