import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className='navigaiton'>
                <div className='logo'>logo</div>
            </div>
            \
            <Outlet />
        </>
    );
};

export default Navigation;
