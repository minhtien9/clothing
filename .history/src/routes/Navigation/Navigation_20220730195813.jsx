import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className='navigaiton'></div>\
            <Outlet />
        </>
    );
};

export default Navigation;
