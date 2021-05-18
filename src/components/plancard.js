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
                <div className="level">{this.props.classesInfo.level}</div>
                <div className="topic">{this.props.classesInfo.topic}</div>
                <div className="topics">{this.props.classesInfo.topics}</div>
                <div className="topics-covered">{this.props.classesInfo.topics_covered}</div>
                <div className="topics">{this.props.classesInfo.project}</div>
                <div className="topics-covered">{this.props.classesInfo.project_covered}</div>
                <div className="topics">{this.props.classesInfo.sessions}</div>
                <div className="topics-covered">{this.props.classesInfo.classes_num}</div>
                <br></br>
                <div className="discount">{this.props.classesInfo.discount}</div>
                <div className="amount"><span className="striked"><strike>{this.props.classesInfo.amount1}</strike></span> {this.props.classesInfo.amount2}</div>
                <br></br>
                <div style={{textAlign: `center`}}>
                    <button className="free-trial-button">Book a free trial</button>
                </div>
            </div>
        );
    }
}

export default PlanCard;