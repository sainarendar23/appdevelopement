import React from 'react'
import { Dashboard } from './Dashboard';

function Sidebar() {
  return (<div className='Sidebar'>
    <ul className='DashBoard'>
    {Dashboard.map((val,key)=>{
    return (
    <li key={key}
    className='row' 
    onClick={()=>{
        window.location.pathname=val.link}}>
        {" "} 
    <div>{val.icon}</div>{" "}
    <div>{val.title}</div>
    </li>
    );
  })}
  </ul>
  </div>
  );
}

export default Sidebar;