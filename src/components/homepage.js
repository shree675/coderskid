import {Component} from 'react';
import Navbar from './navbar';
import freelancer from '../assets/freelancer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import PlanCard from './plancard';
import SimpleSlider from './SimpleSlider';
import Footer from './footer';
import FormInfo from './FormInfo';
import skills from '../assets/skills.svg';
import statistic from '../assets/growing-statistic.svg';
import laptop from '../assets/laptop.svg';
import confidence from '../assets/confidence.svg';
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
import {Parallax} from 'react-scroll-parallax';
import {ParallaxProvider} from 'react-scroll-parallax';

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
                    <img src={freelancer} style={{zIndex: `1`, width:"62%", position: `relative`, top:'52px'}}></img>

                </div>

                <div style={{height: `100px`, backgroundColor: `white`}}></div>
                    <Whycoding />
                {/* <div className="why-coding">
                    <div className="why-title">Every <span style={{color: `turquoise`}}>child</span> must have the chance to learn the skills of tomorrow.</div>
                    <br></br>
                    <div className="quote"><i>Children must be taught how to think, not what to think <div className="quote-sub">- Margaret Mead</div></i>
                    </div>
                    <br></br>                    
                    <br></br>
                    <br></br> */}
                    {/* <div className="why-box">
                        <table className="why-table">                            
                            <tr className="why-row">
                                <td className="why-data1" style={{color: `lightseagreen`}}>We believe that every young person should have access to the tools and skills to power their own future. We imagine a world where every child, no matter where they live, has the opportunity to shape their future.</td>
                                <td className="why-data2"><img src={skills} width="20%"></img></td>
                            </tr>
                        </table>
                    </div> */}

                    {/* <div className="why-box">
                        <table className="why-table">
                            <tr className="why-row">
                                <td className="why-data1" style={{color: `deepskyblue`}}>Kids have access to computers every day and they use them as consumers, rather than designers and creators. Let’s change that and teach kids how to think creatively, reason systematically and work collaboratively.</td>
                                <td className="why-data2"><img src={laptop} width="20%"></img></td>
                            </tr>
                        </table>
                    </div>
                    <div className="why-box">
                        <table className="why-table">
                            <tr className="why-row">
                                <td className="why-data1" style={{color: `lightseagreen`}}>By joining a Code Club, you’re part of an international network of 15,000 clubs and over 250,000 young people. Your child will gain coding skills, as well as important soft skills like public speaking, confidence and communication.</td>
                                <td className="why-data2"><img src={confidence} width="28%"></img></td>
                            </tr>
                        </table>                        
                    </div>
                    <div className="why-box">
                        <table className="why-table">
                            
                            <tr className="why-row">
                                <td className="why-data1" style={{color: `deepskyblue`}}>A child expands their creativity when they learn how to code. Coding teaches children to experiment and gives them the confidence to be creative. They will improve their ability to think.</td>
                                <td className="why-data2"><img src={statistic} width="35%"></img></td>
                            </tr>                            
                        </table>
                    </div> */}
                {/* </div> */}

                <div style={{height: `50px`, backgroundColor: `white`}}></div>

                {/* <ParallaxProvider>
                <Parallax y={[20,-60]} tagOuter="figure"> */}

                <div className="works">
                    <div className="works-title">Here are some of the best works of our students</div>
                    <br></br>
                    
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game2} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    <WorkCard img={game1} title={"Super Mario World"} author={"By Sheth Tanaya"} />
                    
                </div>   

                {/* </Parallax>
                </ParallaxProvider>              */}
                <br></br>

                

                <div style={{height: `550px`, width: `100%`, backgroundColor: `white`}}></div>

                <div style={{height: `100px`}}></div>

                {/* <ParallaxProvider>
                <Parallax y={[100,-50]} tagOuter="figure"> */}
                
                <div className="future-ready">
                    <div className="future-text">Make your child future ready!</div>
                    <div className="future-subtext">The GenZ workforce will be centered around new computational technologies like ML, AI, VR, AR, Blockchain, IoT and Robotics. An early start to coding will make them the creators of tomorrow.</div>
                    <div className="future-card">
                        <br></br>
                        <br></br>
                        <img src={focus} className="future-img"></img>  
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Increases focus and concentration</div> 
                        </ScrollAnimation>
                        <img src={logic} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Improves logical thinking</div>  
                        </ScrollAnimation> 
                        <img src={solve} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Sharpens problem solving</div>
                        </ScrollAnimation> 
                        <img src={creative} className="future-img"></img>
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Fosters imagination and creativity</div>  
                        </ScrollAnimation>
                        <img src={speak} className="future-img"></img>         
                        <ScrollAnimation
                            animateIn='animate__slideInUp'
                            animateOnce={true}
                            duration='0.5'
                            >
                        <div className="future-content">Enhances their communication skills</div>
                        </ScrollAnimation>
                        <div style={{height: `220px`}}></div>
                        <div style={{fontSize: `3vw`, fontFamily: `Quicksand`, color: `black`, fontWeight: `bold`}}> So, why wait?</div>                     
                        <Link to='/form' >    
                        <button className="headBut2">Book A Free Class Now!</button>
                        </Link>
                    </div>
                </div>     

                {/* </Parallax>
                        </ParallaxProvider>            */}

                <div style={{height: `400px`}}></div>
                
                <div className="plans-section">
                    <div className="title2">Courses designed for every child</div>
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

                <div style={{height: `150px`}}></div>

                {/* <div className='carouselImage' style={{width:'100%',height:'60vh'}}>
                <SimpleSlider />
                </div> */}

                <div className="get-started">
                    <div className="future-text" style={{color: `white`, fontWeight: `bold`}}>Get started with your free class</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
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
                        </table>
                        <div className="super-svg">
                            <img src={superhero} height="100%"></img>
                        </div>
                    </div>
                </div>

                <div className="segment">
                    <Link to='/form' style={{textDecoration: `none`, color: `black`, width: `300px`}}>  
                        <div onClick={this.props.ordered} className="free-class-button2" style={{textAlign: `center`}}>                  
                            <div>BOOK A FREE CLASS</div>                                
                        </div>
                    </Link>
                </div>

                <Footer />
            </div>
        );
    }

}

export default HomePage;