import {Component} from 'react';
import ribbon from '../assets/ribbon.svg';

class WorkCard extends Component {

    constructor(props){
        super(props);

        this.state={
            img: props.img,
            author: props.author,
            title: props.title
        }
    }

    render(){
        return (
            <span className="workcard-main">
                <div style={{height: `150px`, overflow: `hidden`}}>
                    <img src={this.state.img} className="work-img"></img>
                </div>
                <div>                    
                    <div className="game-title">{this.state.title}</div>
                    <div className="author">{this.state.author}</div>
                </div>
                <div style={{float: `right`, position: `relative`, bottom: `15px`, right: `10px`}}>
                    <img src={ribbon} height="20px"></img>
                </div>
            </span>
        );
    }
}

export default WorkCard;