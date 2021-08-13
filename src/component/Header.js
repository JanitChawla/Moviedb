import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className="board">
            <h1 style={{marginLeft: '25vw'}}>Famous Movies</h1>
            <span  style={{background: '#12263b', color: 'white'}}>
                <div style={{alignItems: 'center', display: 'flex'}}>
                <a style={{color: 'white', fontSize: '30px'}} href="/favourite">Favourites </a> <Link to="/favourite" >
            <Icon style={{marginTop: '10px'}} color="red" width="40" height="40"icon="ant-design:heart-filled" />
            </Link>
                </div>
                
            </span>
        </div>
    )
}

export default Header;