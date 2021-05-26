import React, {useEffect} from 'react'
import "./Home.css"
import MovingText from 'react-moving-text'
import dev3 from '../assets/dev3.svg'
import dev5 from '../assets/dev5.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos';
import "aos/dist/aos.css";
// import "animate.css/animate.min.css";

function Home() {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="home">  
            <MovingText
              type="flipFromLeftToCenter"
              duration="8000ms"
              delay="0ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              <h1 className="homeh1">CODERSKID</h1>
            </MovingText>           
            <div className="homeTop">
            <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                <h2 className="homeh2">Your child can change the world.</h2>
                </ScrollAnimation>               
                <img data-aos="fade-down" data-aos-duration="3000" className='image2' src={dev5}/>
                
            </div>
        </div>
    )
}

export default Home
