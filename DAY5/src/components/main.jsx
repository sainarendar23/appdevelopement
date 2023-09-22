import React from 'react';
import '../assetes/css/App.css';
import Sidebar from './Sidebar';
import { selectUser } from './redux/UserSlice';
import { useSelector } from 'react-redux';
import { Email } from '@mui/icons-material';

function Home() {
  const Header = () => {
  return (
    <div className="header">
    </div>
  );
};
  return (
    <>
    <div className='Main'>
    <Sidebar />
    </div>
    </>
  );
}

export default Home;
