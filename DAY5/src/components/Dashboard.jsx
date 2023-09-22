import React from 'react'
import HomeIcon from '@mui/icons-material/AddHome';
import HelpIcon from '@mui/icons-material/Help';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';


export const Dashboard = [
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/Main" ,
    },
    {
        title:"Familymembers",
        icon:<GroupIcon/>,
        link:"/Homepage" ,
    },
    {
      title:"remainder",
      icon:<AccessAlarmIcon/>,
      link: "query",       
    },
    {
      title:"payment",
      icon:<PaymentIcon/>,
      link: "query",       
    },
    {
        title:"query",
        icon:<HelpIcon/>,
        link: "query",       
  },
]
