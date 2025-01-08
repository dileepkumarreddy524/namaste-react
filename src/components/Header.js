import {LOGO} from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    let [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} alt="logo"/>
            </div>
            <div className="title-container">
                <h2 className="title">Harika Food Express</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢":"🔴" }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>    
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                        btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;