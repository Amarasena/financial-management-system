import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';

import avatar from '../../images/avatar.png'

import './navigation.css'
import {useState} from "react";


const menuItems = [
    {
        id: 1,
        title: "Dashboard",
        icon: <DashboardIcon sx={{fontSize : '25px', verticalAlign: 'bottom'}}/>,
        link: "/mainPage"
    },
    {
        id: 2,
        title: "View Transactions",
        icon: <ReceiptLongIcon sx={{fontSize : '25px', verticalAlign: 'bottom'}}/>,
        link: "/mainPage"
    },
    {
        id: 3,
        title: "Incomes",
        icon: <TrendingUpIcon sx={{fontSize : '25px', verticalAlign: 'bottom'}}/>,
        link: "/mainPage"
    },
    {
        id: 4,
        title: "Expenses",
        icon: <PaidIcon sx={{fontSize : '25px', verticalAlign: 'bottom'}}/>,
        link: "/mainPage"
    },
]



export default function Navigation({active, setActive}){



    return(
        <div className="navContainer">
            <div className="userContainer">
                <img src={avatar} alt=""/>
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <div className="menu-items">
                {menuItems.map((item) => {
                    return (<li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        <i>{item.icon}</i>
                        <span>{item.title}</span>
                    </li>);
                })}
            </div>
            <div className="bottomNav">
                <li>
                    <LogoutIcon sx={{fontSize : '25px', verticalAlign: 'bottom'}}/> Log Out
                </li>
            </div>
        </div>

    );
}