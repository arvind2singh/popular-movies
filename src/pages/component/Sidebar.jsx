import React from 'react';

export default function Sidebar(props) {
    return (
        <div>
    <div className="nk-sidebar">
        <div className="nk-nav-scroll">
            <ul className="metismenu m-b-30" id="menu">
                <li>
                    <a href="/dashboard" aria-expanded="true">
                        <i className="fa fa-dashboard"></i>
                        <span className="nav-text">Dashboard</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
        </div>
    )
}
