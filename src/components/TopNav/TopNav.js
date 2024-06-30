import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/images/profile-02.png';
import './top-nav.css';

const TopNav = () => {
    return (
        <div className='top__nav'>
           <div className='top__nav-wrapper'>
              <div className='search__box'>
                <input type='text' placeholder='Search Or Type..' />
                <span><i class="ri-search-line"></i></span>
              </div>
              <div className='top__nav-right'>
                <span className='notification'><i class="ri-notification-3-line"></i></span>
                <div className='profile'>
                    <Link to='/settings'><img src={ProfileImg} alt='Profile Img' /></Link>
                </div>
              </div>
            </div> 
        </div>
    );
}

export default TopNav;
