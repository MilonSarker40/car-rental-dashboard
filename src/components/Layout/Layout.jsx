import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';
import Router from '../../Router/Router';

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className='main__layout'>
                <TopNav />
                <div className='content'>
                    <Router />
                </div>
            </div>
        </div>
    );
}

export default Layout;
