import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className='navigaiton'>
                <div className='logo'>logo</div>
                <div className='nav-links-container'>
                    <div className='nav-link'></div>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
