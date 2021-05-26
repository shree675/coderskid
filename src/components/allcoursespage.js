import {Component, useEffect, useState} from 'react';
import CoursesNav from './coursesnav';
import MovingText from 'react-moving-text'
import './allcoursespage.css';
import ReactInputPosition, {MOUSE_ACTIVATION} from "react-input-position";
import {Link} from 'react-router-dom';
import MovingText from 'react-moving-text';
import {GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning} from 'moving-letters';
import {useSpring, animated} from "react-spring";

const AllCourses = (props) => {

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
    });
    
    // const [key, setKey]=useState(1);

    // const scrolling = useSpring({
    //     from: {transform: "translate(60%,0)"},
    //     to: {transform: "translate(-10%,0)"},
    //     config: {duration: 80000},
    //     reset: true,
    //     onRest: () => {
    //         setKey(key+1);
    //     }
    // });

    return (
       
        <div id="courses-page">
            <div style={{position: `relative`, zIndex: `6`}}>
                <CoursesNav />
                </div>
                
                <div id="follower1"></div>
                <div id="follower2"></div>
                <div className="all-courses">
            <MovingText
              type="flipFromLeftToCenter"
              duration="8000ms"
              delay="0ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              <h1 style={{position:'fixed'}} className="homeh1">CODERSKID</h1>
            </MovingText>
            
                <div className="jumbotron-courses" style={{height: window.innerHeight+15}}>
                <MovingText
                type="pulse"
                duration="3000ms"
                delay="0ms"
                direction="alternate"
                timing="ease"
                iteration="infinite"
                fillMode="none">
                <h1 className="homeh1">CODERSKID</h1>
                </MovingText> 
                    <div className="jtext">
                        <div className="jumbotron-text">The right place</div>
                        <div className="jumbotron-text">for your kids</div>
                        <div className="jumbotron-text">to shape their future.</div>
                    </div>
                </div>
                </div>
                <div className="all-courses">
            <MovingText
              type="flipFromLeftToCenter"
              duration="8000ms"
              delay="0ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              <h1 style={{position:'fixed'}} className="homeh1">CODERSKID</h1>
            </MovingText>
                <div className="course1-page" style={{height: window.innerHeight}}>
                    <div className="main-course">
                        <div className="main-course-text">
                            <div className="main-course-name">INTRODUCTION TO CODING</div>
                            <div className="main-course-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula eu ante pellentesque dignissim.</div>                            
                                <Link to='/' style={{textDecoration: `none`, color: ``}}>
                                    <div className="view-course-button" style={{color: `darkgoldenrod`}}>View Course</div>
                                </Link>
                        </div>
                        <div className="main-course-image"></div>
                    </div>
                </div>
                </div>
                <div className="all-courses">
            <MovingText
              type="flipFromLeftToCenter"
              duration="8000ms"
              delay="0ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              <h1 style={{position:'fixed'}} className="homeh1">CODERSKID</h1>
            </MovingText>
                <div className="course2-page" style={{height: window.innerHeight}}></div>
                </div>
                <div className="all-courses">
            <MovingText
              type="flipFromLeftToCenter"
              duration="8000ms"
              delay="0ms"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none">
              <h1 style={{position:'fixed'}} className="homeh1">CODERSKID</h1>
            </MovingText>
                <div className="course3-page" style={{height: window.innerHeight}}></div>
                </div>
            </div>
    );
}
 
export default AllCourses;