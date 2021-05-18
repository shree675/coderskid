import React, { Component } from "react";
import Slider from "react-slick";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      
      <div style={{width:'50%', marginLeft:'25%', paddingTop:'30px'}}>
       
        <Slider {...settings}>
          <div style={{display:'flex'}}>
            <img style={{width:'200px',height:'200px', marginLeft:'35%', borderRadius:'50%', objectFit:'cover'}} src={pic1} />
            <h3>“I knew my daughter had a knack for Mathematics. Lido brought it out in her through creative teaching and carefully thought-out activities!”</h3>
          </div>
          <div style={{display:'flex'}}>
            <img style={{width:'200px',height:'200px', marginLeft:'35%', borderRadius:'50%', objectFit:'cover'}} src={pic2} />
            <h3>“I knew my daughter had a knack for Mathematics. Lido brought it out in her through creative teaching and carefully thought-out activities!”</h3>
          </div>
          <div style={{display:'flex'}}>
            <img style={{width:'200px',height:'200px', marginLeft:'35%', borderRadius:'50%', objectFit:'cover'}} src={pic3} />
            <h3>“I knew my daughter had a knack for Mathematics. Lido brought it out in her through creative teaching and carefully thought-out activities!”</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;