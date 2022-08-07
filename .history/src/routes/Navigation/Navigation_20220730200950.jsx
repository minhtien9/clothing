import React from "react";
import { Outlet, Link } from "react-router-dom";
import{}

const Navigation = () => {
    return (
        <>
            <div className='navigaiton'>
                <div className='logo-container'>logo</div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navigation;
