import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header =() =>{

    return (
        <div className="ui stackable menu">
            <div className="item">
                <img src="https://i2.wp.com/www.tek1.com.au/wp-content/uploads/2017/02/cropped-tek1-new-logo.png?resize=300%2C88&ssl=1"></img>
            </div>

           

               <Link to="/" className="item">
               PROJECT LIST
               </Link>

               <Link to="/employee/timesheet/view" className="item">
               TIME SHEET
               </Link>
               <div className="right menu">
               <GoogleAuth></GoogleAuth>
            </div>
            
        </div>
    );
}


export default Header; 