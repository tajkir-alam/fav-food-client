import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav/Nav';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const [theme, setTheme] = useState('light');

    return (
        <div>
            <Nav theme={theme} setTheme={setTheme}></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;