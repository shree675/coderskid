import React from 'react'
import {Link} from 'react-router-dom'

function Whycoding() {
    return (
        <div>
            <h1 style={{textAlign:'center', marginBottom:'50px', fontFamily: `Quicksand`, fontWeight: `bold`,fontSize:'200%'}}>Why Coding For Kids</h1>
        <div style={{display:'flex'}}>
            <div className='graph' style={{flex:'0.5'}}>
                {<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_tw4rlrkk.json"  background="transparent"  speed="1"  style={{width: '100%', height: '70vh', marginLeft:'25%'}}  loop autoplay></lottie-player>}
            </div>
            <div style={{marginLeft:'13%',flex:'0.5'}}>   <br></br>
                    <div className="quote"><i>Children must be taught how to think, not what to think <br /><div className="quote-sub">- Margaret Mead</div></i>
                    
                    </div>
                    <br />
                    <br />
                    <p style ={{fontSize:'1.3rem'}}>We believe that every young person should have access to the tools and skills to power their own future. We imagine a world where every child, no matter where they live, has the opportunity to shape their future.</p>

                <Link to='/form' >    
                <button className="headBut2">Book A Free Class</button>
                </Link>

            </div>
        </div>
        
        <div className="kid_will_learn" style={{marginTop:'50px', marginBottom:'70px',width:'100%'}}>
            <h1 style={{textAlign:'center', fontFamily: `Quicksand`, fontWeight: `bold`, fontSize:'200%'}}>Your Kids Will Learn</h1>
            <div className="kids-learn-box">
            <div className="to_learn">
                <div className="learn_item">
                    {<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_xudbbfnj.json"  background="transparent"  speed="1"  style={{width: '100%', height: '20%'}}  loop autoplay></lottie-player>}
                    <p style={{fontWeight:'bold'}}>Logic</p>
                </div>
                <div className="learn_item">
                    {<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_oig1xow7.json"  background="transparent"  speed="1"  style={{width: '100%', height: '20%'}}  loop autoplay></lottie-player>}
                    <p style={{fontWeight:'bold'}}>Structure</p>
                </div>
                <div className="learn_item">
                    {<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_5pp8fztp.json"  background="transparent"  speed="1"  style={{width: '100%', height: '20%'}}  loop autoplay></lottie-player>}
                    <p style={{fontWeight:'bold'}}>Creativity</p>
                </div>
                <div className="learn_item">
                    {<lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_hfg9menc.json"  background="transparent"  speed="1"  style={{width: '100%', height: '20%'}}  loop autoplay></lottie-player>}
                    <p style={{fontWeight:'bold'}}>Sequencing</p>
                </div>
                <div className="learn_item">
                    {<lottie-player src="https://assets10.lottiefiles.com/datafiles/9qxaAmrB5yzi03f/data.json"  background="transparent"  speed="1"  style={{width: '100%', height: '20%'}}  loop autoplay></lottie-player>}
                    <p style={{fontWeight:'bold'}}>Algorithm Thinking</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Whycoding
