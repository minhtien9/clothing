import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className='navigaiton'>
                <div className='logo'>logo</div>
                <div className='nav-links-container'>
                    <Link></Link>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
