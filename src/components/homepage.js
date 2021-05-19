import {Component} from 'react';
import Navbar from './navbar';
import freelancer from '../assets/freelancer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import PlanCard from './plancard';
import SimpleSlider from './SimpleSlider';
import Footer from './footer'
import FormInfo from './FormInfo'


class HomePage extends Component {

    constructor(props){
        super(props);

        this.showc1=this.showc1.bind(this);
        this.showc2=this.showc2.bind(this);
        this.showc3=this.showc3.bind(this);
    
        this.state = {
        
            purchase:false,
    
            classes_1_4:{
                classes_upto:'',
                basic:{
                    level:'BASIC',
                    topic:'Introduction to Coding',
                    topics:'TOPICS COVERED',
                    topics_covered:'Sequence | Algorithms | Debugging | Code Art | Animations',
                    project:'PROJECTS',
                    project_covered:'Code Story',
                    sessions:'SESSIONS',
                    classes_num:'8 classes',
                    discount:'7% discount',
                    amount1:"₹6,000",
                    amount2:'₹5,600'
                },
                standard:{
                    level:'STANDARD',
                    topic:'Design and Create',
                    topics:'TOPICS COVERED',
                    topics_covered:'Events, Characters, Interactive utility apps and games',
                    project:'PROJECTS',
                    project_covered:'Code Story, Pocket-money manager, Soundboard Quiz app',
                    sessions:'SESSIONS',
                    classes_num:'8 classes',
                    discount:'11% discount',
                    amount1:"₹36,000",
                    amount2:'₹32,000'
                },
                premium:{
                    level:'PREMIUM',
                    topic:'App & Game Development',
                    topics:'TOPICS COVERED',
                    topics_covered:'Multiscreen native utility apps, AI chatbots, Complex game development',
                    project:'PROJECTS',
                    project_covered:'Code StoryPocket-money managerSoundboard Quiz appBubble shooterPortfolio Mobile AppUnit Converter',
                    sessions:'SESSIONS',
                    classes_num:'8 classes',
                    discount:'12% discount',
                    amount1:"₹100,000",
                    amount2:'₹95,000'
                },
            }
    
          }

    }

    

    purchaseHandler = () => {
        this.setState({purchase:true});
    }

    purchaseHandlerClose = () => {
        this.setState({purchase:false});
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
                <Navbar ordered={this.purchaseHandler} />
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
                    <div className="title" style={{fontSize: `2.5vw`, color: `#458670`,top:'280px'}}>
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Lorem Ipsum
                    </ScrollAnimation>
                    </div>
                    </div>
                    <img src={freelancer}  style={{zIndex: `1`, width:"80%", position: `relative`, top:'40px'}}></img>

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

                    <div style={{position:'relative'}}>
                   { this.state.purchase ?<div className="formInfo"> <FormInfo ordered={this.purchaseHandlerClose} /></div>:null}
                   </div>

                    <div className="ul-act">
                        <ul>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true} 
                            duration='1'
                            >
                            <div>
                            <div style={{display:'flex'}}>
                            <li id="classes1"  style={{margin:'auto 30px auto 30px'}}>
                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>

                            <li id="classes1" style={{margin:'auto 30px auto 30px'}}>
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.standard} />
                            </li>

                            <li id="classes1" style={{margin:'auto 30px auto 30px'}}>
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.premium} />
                            </li>
                            </div>
                            </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true}
                            duration='1'
                            >
                            <div>
                            <li id="classes2">
                               
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>
                            </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true}
                            duration='1'
                            >
                                <div>
                            <li id="classes3">
                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>
                            </div>
                            </ScrollAnimation>
                        </ul>
                    </div>                    
                </div>
                <br></br>
                <br></br>
                <div className='carouselImage' style={{width:'100%',height:'60vh'}}>
                <SimpleSlider />
                </div>
                <Footer />
            </div>
        );
    }

}

export default HomePage;