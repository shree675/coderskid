import React from 'react'

function footer() {
    return (
        <div style={{backgroundColor:'#393e46',color:"whitesmoke", padding:'60px', display:'flex', justifyContent:'center'}}>
            <div className="contactInfo" style={{marginRight:'40px'}}>
                <p>21, New Street</p>
                <p> +2124 3521 32</p>
                <p>support@gmail.com</p>
                </div>   
            <div className="about" style={{marginLeft:'40px'}}>
                <h3>About The Company</h3>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    );
}

export default footer
