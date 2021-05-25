import {Component} from 'react';
import Navbar from './navbar';
import freelancer from '../assets/freelancer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import PlanCard from './plancard';
import Footer from './footer';
// import FormInfo from './FormInfo';
// import skills from '../assets/skills.svg';
// import statistic from '../assets/growing-statistic.svg';
// import laptop from '../assets/laptop.svg';
// import confidence from '../assets/confidence.svg';
import {Link} from 'react-router-dom';
import WorkCard from './workcard';
import game1 from '../assets/game1.jpeg';
import game2 from '../assets/game2.jpg';
import focus from '../assets/conc.jpg';
import superhero from '../assets/superhero.svg';
import creative from '../assets/creativity.jpg';
import logic from '../assets/logic.jpg';
import solve from '../assets/problemsolving.jpg';
import speak from '../assets/speaking.jpg';
import Whycoding from './whycoding';

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
                    amount2:'₹5,600',
                    color: 'green'
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
                    amount2:'₹32,000',
                    color: 'orange'
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
                    amount2:'₹95,000',
                    color: 'tomato'
                },
            }
    
          }

    }

    componentDidMount(){
        document.getElementById("cls2").style.display="none";
        document.getElementById("cls3").style.display="none";
    }

    purchaseHandler = () => {
        this.setState({purchase:true});
    }

    purchaseHandlerClose = () => {
        this.setState({purchase:false});
    }


    showc1(){
        const screen=window.matchMedia("(min-width: 900px)");
        document.getElementById("c1").style.backgroundColor="white";
        document.getElementById("c2").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.backgroundColor="#30bca8";
        document.getElementById("c1").style.color="black";
        document.getElementById("c2").style.color="white";
        document.getElementById("c3").style.color="white";
        document.getElementById("cls1").style.display="";
            document.getElementById("cls2").style.display="none";
            document.getElementById("cls3").style.display="none";
        // if(screen){
        //     document.getElementById("cls1").style.display="block";
        //     document.getElementById("cls2").style.display="none";
        //     document.getElementById("cls3").style.display="none";
        // }
        // else{
        //     document.getElementById("cls1").style.display="flex";
        //     document.getElementById("cls2").style.display="none";
        //     document.getElementById("cls3").style.display="none";
        // }
    }

    showc2(){
        const screen=window.matchMedia("(min-width: 900px)");
        document.getElementById("c2").style.backgroundColor="white";
        document.getElementById("c1").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.backgroundColor="#30bca8";
        document.getElementById("c2").style.color="black";
        document.getElementById("c1").style.color="white";
        document.getElementById("c3").style.color="white";
        document.getElementById("cls2").style.display="";
        document.getElementById("cls1").style.display="none";
        document.getElementById("cls3").style.display="none";
        // if(screen){
        //     document.getElementById("cls2").style.display="block";
        //     document.getElementById("cls1").style.display="none";
        //     document.getElementById("cls3").style.display="none";
        // }
        // else{
        //     document.getElementById("cls2").style.display="flex";
        //     document.getElementById("cls1").style.display="none";
        //     document.getElementById("cls3").style.display="none";
        // }
    }

    showc3(){
        const screen=window.matchMedia("(min-width: 900px)");
        document.getElementById("c3").style.backgroundColor="white";
        document.getElementById("c2").style.backgroundColor="#30bca8";
        document.getElementById("c1").style.backgroundColor="#30bca8";
        document.getElementById("c3").style.color="black";
        document.getElementById("c2").style.color="white";
        document.getElementById("c1").style.color="white";
        document.getElementById("cls3").style.display="";
        document.getElementById("cls1").style.display="none";
        document.getElementById("cls2").style.display="none";
        // if(screen){
        //     // console.log('hello')
        //     document.getElementById("cls3").style.display="block";
        //     document.getElementById("cls2").style.display="none";
        //     document.getElementById("cls1").style.display="none";
        // }
        // else{            
        //     document.getElementById("cls3").style.display="flex";
        //     document.getElementById("cls2").style.display="none";
        //     document.getElementById("cls1").style.display="none";
        // }
    }
   
    render(){

        return (
            <div>
                <Navbar ordered={this.purchaseHandler} name="Book a free class" namelink="/form"/>
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
                    <div className="titlePara">
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Lorem Ipsum
                    </ScrollAnimation>
                    </div>
                    </div>
                    <img className="homeImg" src={freelancer} ></img>

                </div>

                <div style={{height: `100px`, backgroundColor: `white`}}></div>
                
                <Whycoding />                

                <div style={{height: `30px`, backgroundColor: `white`}}></div>

                <div className="works">
                    <div className="works-title">Here are some of the best works of our students</div>
                    <br></br>
                    <div className="works-card-outer1">
                    <div className="works-card-inner">
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />   
                
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    </div>
                    </div>

                    <div className="works-card-outer2">
                    <div className="works-card-inner">
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />   
                
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    
                    </div>
                    </div>
                    
                    <div className="works-card-outer3">
                    <div className="works-card-inner3">
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} /> 
                    <div></div>  
                    <div></div>
                    <div></div>
                
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    
                    
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    

                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />

                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    </div>
                    </div>

                </div>   
                <br></br>
                
                <div style={{height: `50px`, width: `100%`, backgroundColor: `white`}}></div>

                <div style={{height: `100px`}}></div>
                
                <div className="future-ready">
                    <div className="future-text">Make your child future ready!</div>
                    <div className="future-subtext">The GenZ workforce will be centered around new computational technologies like ML, AI, VR, AR, Blockchain, IoT and Robotics. An early start to coding will make them the creators of tomorrow.</div>
                    <div className="future-card">
                        <br></br>
                        <br></br>
                        <div className="future-outer">
                        <img src={focus} className="future-img"></img>  
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Increases focus and concentration</div> 
                        
                        </ScrollAnimation>
                        </div>
                        <div style={{flex: `1`, margin: `0px`}}>
                        <img src={logic} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Improves logical thinking</div>  
                        </ScrollAnimation> 
                        </div>
                        </div>
                        <div className="future-card">
                        <div style={{flex: `1`}}>
                        <img src={solve} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Sharpens problem solving</div>
                        </ScrollAnimation> 
                        </div>
                        <div style={{flex: `1`}}>
                        <img src={creative} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Fosters imagination and creativity</div>  
                        </ScrollAnimation>
                        </div>
                        </div>
                        <div className="future-card">
                        <div style={{flex: `1`}}>
                        <img src={speak} className="future-img"></img>         
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Enhances their communication skills</div>
                        </ScrollAnimation>
                        </div>
                        <div style={{flex: `1`}}>
                        <img src={focus} className="future-img"></img>  
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Increases focus and concentration</div> 
                        
                        </ScrollAnimation>
                        </div>
                        </div>                        
                        <div style={{height: `220px`}}></div>
                        <div className="why-wait"> So, why wait?</div>                     
                        <Link to='/form' >    
                        <button className="headBut2">Book A Free Class Now!</button>
                        </Link>
                    </div>

                <div style={{height: `70vh`, width:'100%'}}></div>
                
                <div className="plans-section">
                    <div className="title2">Courses designed for every child</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                    <div className="ul-buttons">
                        <button id="c1" className="plan-button" onClick={this.showc1}>Classes 1 to 4</button>
                        <button id="c2" className="plan-button" onClick={this.showc2}>Classes 5 to 8</button>
                        <button id="c3" className="plan-button" onClick={this.showc3}>Classes 9 to 12</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="plans-display-normal">
                    <div className="ul-act">
                        <ul id="plans-ul">
                            <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOnce={true} 
                            duration='1'
                            >
                            <div>
                            <div className="planSetions">
                            <div id="cls1">
                            <li id="classes1" className="cl1">                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>

                            <li id="classes1" className="cl1">
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.standard} />
                            </li>

                            <li id="classes1" className="cl1">
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.premium} />
                            </li>  
                            </div>
                            <div id="cls2">
                            <li id="classes2" className="cl2">                               
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>  
                            <li id="classes2" className="cl2">                               
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.premium} />
                            </li>  
                            <li id="classes2" className="cl2">                               
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.standard} />
                            </li>      
                            </div>
                            <div id="cls3">
                            <li id="classes3" className="cl3">                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.standard} />
                            </li>
                            <li id="classes3" className="cl3">                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.basic} />
                            </li>
                            <li id="classes3" className="cl3">                                
                                <PlanCard ordered={this.purchaseHandler} classesInfo={this.state.classes_1_4.premium} />
                            </li>
                            </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                        </ul>
                        
                    </div> 
                    </div>                    

                    </div>                                            
                </div>

                <div style={{height: `150px`}}></div>

                <div className="get-started">
                    <div className="future-text" style={{color: `black`, fontWeight: `bold`}}>Get started with your free class</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="get-started-display">
                        <table className="started-table">
                            <tr className="started-row">
                                <td className="started-data">
                                    <div className="step">STEP 1</div>
                                    <div className="step-content">Signup by filling in your details</div>
                                </td>
                                <td className="started-data">
                                    <div className="step">STEP 2</div>
                                    <div className="step-content">Schedule your first class for free</div>
                                </td>
                                <td className="started-data">
                                    <div className="step">STEP 3</div>
                                    <div className="step-content">Experience the live class with our tutor</div>
                                </td>
                            </tr>
                            <tr className="started-row">
                                <td className="started-data">
                                    <div className="step">STEP 4</div>
                                    <div className="step-content">Subscribe to your favourite coding course</div>
                                </td>
                                <td className="started-data">
                                    <div className="step">STEP 5</div>
                                    <div className="step-content">Start learning. Happy coding!</div>
                                </td>
                            </tr>
                            <Link to='/form' >    
                                <button className="headBut3">Book A Free Class Now!</button>
                            </Link>
                        </table>

                        <div className="super-svg">
                            <img src={superhero} height="100%"></img>
                        </div>
                    </div>

                    <div className="get-started-display-when-small">
                        <div className="step">STEP1</div>
                        <div className="step-content">Signup by filling in your details</div>
                        <div style={{height: `60px`}}></div>
                        <div className="step">STEP2</div>
                        <div className="step-content">Schedule your first class for free</div>
                        <div style={{height: `60px`}}></div>
                        <div className="step">STEP3</div>
                        <div className="step-content">Experience the live class with our tutor</div>
                        <div style={{height: `60px`}}></div>
                        <div className="step">STEP4</div>
                        <div className="step-content">Subscribe to your favourite coding course</div>
                        <div style={{height: `60px`}}></div>
                        <div className="step">STEP5</div>
                        <div className="step-content">Start learning. Happy coding!</div>
                        <div style={{height: `20px`}}></div>
                        <div style={{textAlign: `center`}}>
                            <Link to='/form' >    
                                <button className="headBut3">Book A Free Class Now!</button>
                            </Link>
                        </div>
                        <div style={{height: `20px`}}></div>
                        <div className="super-svg-small">
                            <img src={superhero} height="100%"></img>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }

}

export default HomePage;