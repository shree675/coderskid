import {Component} from 'react';
import {Link} from 'react-router-dom';

class PlanCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="main-card"> 
                <div className="level" style={{color: this.props.classesInfo.color}}>{this.props.classesInfo.level}</div>
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
                <div style={{textAlign: `center`, position: `absolute`, bottom: `20px`, left: `20%`, right: `20%`}}>
                    <Link to='/form'>
                        <button onClick={this.props.ordered} className="free-trial-button">Book a free trial</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlanCard;