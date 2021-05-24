import React from 'react';
import {Link} from 'react-router-dom';

function footer() {
    return (
        <div style={{backgroundColor:'#393e46',color:"whitesmoke", padding:'40px', display:'flex', justifyContent:'center'}}>
            <div className="contactInfo" style={{marginRight:'40px', textAlign: `right`}}>
                <p>21, New Street</p>
                <p>+2124 3521 32</p>
                <p>support@gmail.com</p>
                </div>   
            <div className="about" style={{marginLeft:'40px'}}>
                <div className="footer-company">About The Company</div>
                <p>
                    <Link to='/' style={{textDecoration: `none`}}>
                        <span className="about-footer">Coderskid</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default footer
