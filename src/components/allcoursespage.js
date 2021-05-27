import {Component, useEffect, useState} from 'react';
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

const AllCourses = () => {

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
        var lastScrollTop = 0;
        
        var element=document.getElementById("courses-page");
        window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if(st>lastScrollTop){
            console.log('down');
            // this.setTimeout(()=>{
            //     window.scrollTo(0,window.scrollY);
            // },1000);                     
        }
        else{
            // upscroll code
            console.log('up');
        }
        lastScrollTop = st <= 0 ? 0 : st;
        },false);
    });

    const calc=(x,y)=>[x-window.innerWidth/2,y-window.innerHeight/2];
    const trans1=(x,y)=>`translate3d(${x/15}px,${y/15}px,0)`;
    const trans2=(x,y)=>`translate3d(${x/8}px,${y/8}px,0)`;

    const [props, set]=useSpring(()=>({xy: [0,0], config: {mass: 10, tension: 550, friction: 140}}));

    return (
       
        <div id="courses-page">
            <div style={{position: `relative`, zIndex: `10`}}>
                <CoursesNav />
            </div>
                
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
                        <div className="jumbotron-text">The right place</div>
                        <div className="jumbotron-text">for your kids</div>
                        <div className="jumbotron-text">to shape their future.</div>
                    </div>
                    <div className="scroll-down">
                    {<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_04wi8isl.json"  background="transparent"  speed="1"  style={{width: '50px', height: '50px', textAlign: `center`}}  loop autoplay></lottie-player>}
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`}}>
                <div className="course1-page" style={{height: window.innerHeight}}>
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
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`}}>
                <div className="course2-page" style={{height: window.innerHeight}}>
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
                    </div>
                </div>
            </div>



            <div style={{overflow: `hidden`}}>
                <div className="course3-page" style={{height: window.innerHeight}}>
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
                    </div>
                </div>
            </div>


            </div>
    );
}
 
export default AllCourses;