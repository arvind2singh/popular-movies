import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { user_logout } from "../redux/actions/authActions";
export default function Header(props) {
    const dispatch = useDispatch();
    async function backRouter() {
        dispatch(
            user_logout(() => props.history.replace('/login')))
        }
    return (

        <div className="header">
            <div className="nav-header">
                <div className="brand-logo">
                    <Link to="/dashboard">
                    <i class="fa fa-film" style={{fontSize:'26px'}}></i>
                    </Link>
                    <span className="brand-title">Movies</span>
                </div>
            </div>
    
            <div className="header-content">
                <div className="header-left d-flex">
                    <div className="nav-control">
                        <div className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
    
                    </div>
                </div>
            </div>
                <div className="navbar-custom-menu pull-right d-flex nav-right">
                <div className="dropdown">
                    <a className="dropdown-toggle user-profile-dropdown" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="user-img">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <span className="user-name">ADMIN</span>
                    </a>
    
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink" style={{width: '200px'}}>
                        <a className="dropdown-item" style={{cursor:'pointer', width:'100%'}} href="/reset-passcode">
                            <i className="fa fa-wrench"></i> Change Password
                        </a>
                        <a className="dropdown-item" style={{cursor:'pointer', width:'100%'}} href="/dashboard">
                            <i className="fa fa-question-circle"></i> Support
                        </a>
                        <a className="dropdown-item" style={{cursor:'pointer', width:'100%'}} onClick={() => {backRouter()}}>
                            <i className="fa fa-power-off" aria-hidden="true"></i> Logout
                        </a>
                    </div>
                </div>
    
            </div>
    
        </div>  
        
    )
}
