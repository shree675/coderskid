import {Component} from 'react';
import {Link} from 'react-router-dom';

class PlanCard extends Component {
    constructor(props){
        super(props);
        // get card details from props
        // I have hardcoded details right now
    }

    render(){
        return (
            <div className="main-card">
                <div className="level">BASIC</div>
                <div className="topic">Introduction to Coding</div>
                <div className="topics">TOPICS COVERED</div>
                <div className="topics-covered">Sequence | Algorithms | Debugging | Code Art | Animations</div>
                <div className="topics">PROJECTS</div>
                <div className="topics-covered">Code Story</div>
                <div className="topics">SESSIONS</div>
                <div className="topics-covered">8 classes</div>
                <br></br>
                <div className="discount">7% discount</div>
                <div className="amount"><span className="striked"><strike>₹6,000</strike></span> ₹5,600</div>
                <br></br>
                <div style={{textAlign: `center`}}>
                    <button className="free-trial-button">Book a free trial</button>
                </div>
            </div>
        );
    }
}

export default PlanCard;