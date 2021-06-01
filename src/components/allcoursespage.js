import {Component, useEffect, useState, React} from 'react';
import CoursesNav from './coursesnav';
import MovingText from 'react-moving-text'
import './allcoursespage.css';
import {Link} from 'react-router-dom';
import {useSpring, animated} from "react-spring";
import programmer from '../assets/programmer.svg';
import coding from '../assets/coding.svg';
import expdesign from '../assets/expdesign.svg';
import mobileapps from '../assets/mobileapps.svg';
import mobiledev from '../assets/mobiledev.svg';
import designteam from '../assets/designteam.svg';
// import ReactPageScroller from 'react-page-scroller';
import {Pager} from "react-pager";
// import MyComponent from 'react-full-page-scroller';
// import 'react-full-page-scroller/dist/index.css';
// import ScrollableContainer from "react-full-page-scroll";
import {FullPage, Slide} from 'react-full-page';
import google from '../assets/google.svg';
import slides from '../assets/slides.svg';
import gdocs from '../assets/gdocs.svg';
import spreadsheet from '../assets/spreadsheet.svg';
import canva1 from '../assets/canva1.svg';
import canva2 from '../assets/canva2.svg';
import presentation from '../assets/presentation.jpg';
// import pres from '../assets/pres.jpg';
import pres1 from '../assets/pres1.svg';
import pres2 from '../assets/pres2.svg';
import speak from '../assets/speak.svg';
import canva from '../assets/canva.svg';

const AllCourses = () => {

    // document.body.scrollTop=document.documentElement.scrollTop=0;

    useEffect(()=>{
        try{
            var page=document.getElementById("courses-page");
            var cursor=document.getElementById("follower1");
            var cursor2=document.getElementById("follower2");
            page.addEventListener('mousemove',function(e){
                var x=e.clientX;
                var y=e.clientY;
                cursor.style.left=x+window.pageXOffset+'px';
                cursor.style.top=y+window.pageYOffset+'px';
                cursor2.style.left=x+window.pageXOffset+'px';
                cursor2.style.top=y+window.pageYOffset+'px';
            });
        }
        catch(error){
            console.log(error);
        }        

        // var lastScrollTop = 0;
        
        // var element=document.getElementById("courses-page");
        // window.addEventListener("scroll", function(){
        // var st = element.pageYOffset || document.documentElement.scrollTop;
        // if(st>lastScrollTop){
        //     console.log('down');
        //     window.scrollTo(0,window.innerHeight+window.scrollY);
        //     // disableBodyScroll({savePosition: false});
        //     this.setTimeout(()=>{
        //         // enableBodyScroll();
        //     },500);
        // }
        // else{
        //     // upscroll code
        //     console.log('up');
        // }
        // lastScrollTop = st <= 0 ? 0 : st;
        // },false);
    });

    function scrollDown1(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY);
        document.getElementById("page2").scrollIntoView();
    }

    function scrollDown2(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY+2);
        document.getElementById("page3").scrollIntoView();
    }

    function scrollDown3(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY+2);
        document.getElementById("page4").scrollIntoView();
    }

    function scrollDown4(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY+2);
        document.getElementById("page5").scrollIntoView();
    }

    function scrollDown5(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY+2);
        document.getElementById("page6").scrollIntoView();
    }

    function scrollDown6(){
        // console.log('scroll');
        // window.scrollTo(0,window.innerHeight+window.scrollY+2);
        document.getElementById("page7").scrollIntoView();
    }

    const calc=(x,y)=>[x-window.innerWidth/2,y-window.innerHeight/2];
    const trans1=(x,y)=>`translate3d(${x/15}px,${y/15}px,0)`;
    const trans2=(x,y)=>`translate3d(${x/8}px,${y/8}px,0)`;
    const trans3=(x,y)=>`translate3d(${x/6}px,${y/6}px,0)`;

    const [props, set]=useSpring(()=>({xy: [0,0], config: {mass: 10, tension: 550, friction: 140}}));

    return (        
       
        <div id="courses-page">
            {/* <div style={{position: `relative`, zIndex: `10`}}>
                <CoursesNav />
            </div> */}
                
            <div id="follower1"></div>
            <div id="follower2"></div>

            <div style={{overflow: `hidden`}}> 
                <div className="jumbotron-courses" style={{height: window.innerHeight+15}}>
                <MovingText
                type="pulse"
                duration="3000ms"
                delay="0ms"
                direction="alternate"
                timing="ease"
                iteration="infinite"
                fillMode="none">
                <h1 style={{position:'fixed'}} className="homeh1">CODERSKID</h1>
                </MovingText> 
                    <div className="jtext">
                        {/* <div className="jumbotron-text">The right place</div>
                        <div className="jumbotron-text">for your kids</div>
                        <div className="jumbotron-text">to shape their future.</div> */}
                        <div className="jumbotron-text">Here are some</div>
                        <div className="jumbotron-text">of the courses</div>
                        <div className="jumbotron-text">that we offer</div>
                    </div>
                    <div className="scroll-down" style={{marginTop: window.innerHeight/1.6}}>
                        <button className="scroll-down-button" onClick={scrollDown1}>
                        {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent" speed="1" style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                        </button>
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`}} id="page2">
                <div className="course1-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">INTRODUCTION TO CODING</div>
                            <div className="main-course-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu ante pellentesque dignissim.</div>                            
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `darkgoldenrod`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.to(trans1) }}>
                            <img className="illust1" src={programmer}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans2) }}>
                            <img className="illust2" src={coding}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>
                        <div className="scroll-down" style={{marginTop: `-200px`}}>
                            <button className="scroll-down-button" onClick={scrollDown2}>
                            {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>



            <div style={{overflow: `hidden`, height: `100vh`}} id="page3">
                <div className="course2-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">DESIGN AND CREATE</div>
                            <div className="main-course-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu ante pellentesque dignissim.</div>                            
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `rgb(110, 89, 186)`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.to(trans1) }}>
                            <img className="illust1" src={designteam}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans2) }}>
                            <img className="illust2" src={expdesign}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>
                        <div className="scroll-down" style={{marginTop: `-200px`}}>
                            <button className="scroll-down-button" onClick={scrollDown3}>
                            {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`, height: `100vh`}} id="page4">
                <div className="course3-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">APP &amp; GAME DEVELOPMENT</div>
                            <div className="main-course-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu ante pellentesque dignissim.</div>                            
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `rgb(91, 203, 228)`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{transform: props.xy.to(trans1)}}>
                            <img className="illust1" src={mobileapps}></img>
                            </animated.div>
                            <animated.div style={{transform: props.xy.to(trans2)}}>
                            <img className="illust2" src={mobiledev}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>
                        <div className="scroll-down" style={{marginTop: `-200px`}}>
                            <button className="scroll-down-button" onClick={scrollDown4}>
                            {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`, height: `100vh`}} id="page5">
                <div className="course4-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">DESIGN WITH <img src={canva} height="60" style={{marginTop: `-5px`}}></img></div>
                            <div className="main-course-content">This course is your one-stop shop if you want to learn how to get started with Canva but also start building your visual brand.</div>                            
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `rgb(216, 125, 95)`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.to(trans1) }}>
                            <img className="illust1" src={canva1}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans2) }}>
                            <img className="illust2" src={canva2}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>
                        <div className="scroll-down" style={{marginTop: `-200px`}}>
                            <button className="scroll-down-button" onClick={scrollDown5}>
                            {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`, height: `100vh`}} id="page6">
                <div className="course5-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name"><img src={google} height="40" style={{marginTop: `-5px`}}></img> SUITE</div>
                            <div className="main-course-content">Enthusiasts will learn how to collaborate using different, free G-Suite Apps, and how to work on shared documents.</div>                            
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `#4e4e4e`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.to(trans1) }}>
                            <img className="illust4" src={slides}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans2) }}>
                            <img className="illust2" src={spreadsheet}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans3) }}>
                            <img className="illust3" src={gdocs}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>
                        <div className="scroll-down" style={{marginTop: `-200px`}}>
                            <button className="scroll-down-button" onClick={scrollDown6}>
                            {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`, height: `100vh`}} id="page7">
                <div className="course6-page" style={{height: '100vh'}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">PRESENTATION SKILLS</div>
                            <div className="main-course-content">Whether you’re presenting an idea or a product or a complicated issue, this Specialization gives you tools to make it right.</div>
                            <Link to='/' style={{textDecoration: `none`, color: ``, position: `relative`, zIndex: `11`}}>
                                <div className="view-course-button" style={{color: `darkslateblue`, position: `relative`, zIndex: `11`}}><span>View Course</span></div>
                            </Link>
                        </div>
                        <div className="main-course-img" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.to(trans1) }}>
                            <img className="illust1" src={pres2}></img>
                            </animated.div>
                            <animated.div style={{ transform: props.xy.to(trans2) }}>
                            <img className="illust2" src={speak}></img>
                            </animated.div>
                        </div>
                        <div className="main-course-image"></div>                        
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default AllCourses;