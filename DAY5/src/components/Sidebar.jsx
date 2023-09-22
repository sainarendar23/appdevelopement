import React from 'react';
import { Dashboard } from './Dashboard';
import { selectUser } from './redux/UserSlice';
import { useSelector } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email'; // Import the Email icon

function Sidebar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.email ? user.user.email : 'Guest';

  return (
    <div className='Sidebar'>
      <ul className='DashBoard'>
      <p className='huh'>
                  Welcome, {username}!
                </p>
        {Dashboard.map((val, key) => {
          return (
            <li
              key={key}
              className='row'
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              
              <div id='icon'>{val.icon}</div>{" "}
              <div id='title'>{val.title}</div>
              <div>
                
              </div>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
}

export default Sidebar;
