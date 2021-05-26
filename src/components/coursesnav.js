import {Component} from 'react';
import {Link} from 'react-router-dom';
import './coursesnav.css';

class CoursesNav extends Component {
    render(){
        return (
            <div className="main-nav">
                <div className="left">
                <Link to='/' style={{textDecoration: `none`, color: `black`}}>
                    <span className="coderskid2">Coderskid</span>
                </Link>
                </div>
            </div>
        );
    }
}

export default CoursesNav;