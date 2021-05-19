import {Component} from 'react';

class WorkCard extends Component {

    constructor(props){
        super(props);

        this.state={
            img: props.img,
            person: props.person,
            title: props.title
        }
    }

    render(){
        return (
            <div></div>
        );
    }
}