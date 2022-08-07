import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg";

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
