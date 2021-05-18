import {Component} from 'react';
import Navbar from './navbar';
import freelancer from '../assets/freelancer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import PlanCard from './plancard';

class HomePage extends Component {

    constructor(props){
        super(props);

        this.showc1=this.showc1.bind(this);
        this.showc2=this.showc2.bind(this);
        this.showc3=this.showc3.bind(this);

    }

    showc1(){
        document.getElementById("c1").style.backgroundColor="white";
        document.getElementById("c2").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.backgroundColor="#30bca8";
        document.getElementById("c1").style.color="black";
        document.getElementById("c2").style.color="white";
        document.getElementById("c3").style.color="white";
        document.getElementById("classes1").style.display="block";
        document.getElementById("classes2").style.display="none";
        document.getElementById("classes3").style.display="none";
    }

    showc2(){
        document.getElementById("c2").style.backgroundColor="white";
        document.getElementById("c1").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.backgroundColor="#30bca8";
        document.getElementById("c2").style.color="black";
        document.getElementById("c1").style.color="white";
        document.getElementById("c3").style.color="white";
        document.getElementById("classes2").style.display="block";
        document.getElementById("classes1").style.display="none";
        document.getElementById("classes3").style.display="none";
    }

    showc3(){
        document.getElementById("c3").style.backgroundColor="white";
        document.getElementById("c2").style.backgroundColor="#30bca8";
        document.getElementById("c1").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.color="black";
        document.getElementById("c2").style.color="white";
        document.getElementById("c1").style.color="white";
        document.getElementById("classes3").style.display="block";
        document.getElementById("classes1").style.display="none";
        document.getElementById("classes2").style.display="none";
    }

    render(){
        return (
            <div>
                <Navbar />
                <div style={{height: `30px`}}></div>
                
                <div className="jumbotron">
                    
                    <div style={{zIndex: `2`}}>
                    <div className="title">
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Your child can change the world.
                    </ScrollAnimation>
                    </div>
                    <div className="title" style={{fontSize: `2.5vw`, color: `#458670`}}>
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Lorem Ipsum
                    </ScrollAnimation>
                    </div>
                    </div>
                    <img src={freelancer} width="80%" style={{zIndex: `1`, position: `relative`}}></img>

                </div>

                <div style={{height: `100px`, backgroundColor: `white`}}></div>

                <div className="plans-section">
                    <div className="title2">Courses designed for every child</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="ul-buttons">
                        <button id="c1" className="plan-button" onClick={this.showc1}>Classes 1 to 4</button>
                        <button id="c2" className="plan-button" onClick={this.showc2}>Classes 5 to 8</button>
                        <button id="c3" className="plan-button" onClick={this.showc3}>Classes 9 to 12</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ul-act">
                        <ul>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true}
                            duration='1'
                            >
                            <li id="classes1">
                                classes 1 to 4
                                <PlanCard />
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true}
                            duration='1'
                            >
                            <li id="classes2">
                                classes 5 to 8
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true}
                            duration='1'
                            >
                            <li id="classes3">
                                classes 9 to 12
                            </li>
                            </ScrollAnimation>
                        </ul>
                    </div>                    
                </div>
                <br></br>
                <br></br>
                <div style={{height: `1800px`, backgroundColor: `white`}}></div>
            </div>
        );
    }

}

export default HomePage;