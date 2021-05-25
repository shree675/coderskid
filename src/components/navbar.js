import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    constructor(props){
        super(props);

        this.state={
            scrolled: true,
            y: 100,
            color: 'white',
        }
    }

    componentDidMount(){
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled>=50){
               this.setState({
                   scrolled: false
               })
            }
            else{
                this.setState({
                    scrolled: true
                })
            }
        })
    }

    render(){
        return (
            <div style={{position: `fixed`, width: `100%`, zIndex: `3`}} className={this.state.scrolled?"bg1":"bg2"}>

                    <div className={this.state.scrolled?"navbar-init":"navbar-scrolled"}>
                        <div style={{float: `left`}}>
                            <Link to='/' style={{textDecoration: `none`, color: `black`}}>
                                <div style={{margin: `0px`, paddingBottom: this.state.scrolled?`15px`:`12px`}}>                                    
                                    <span className="coderskid">Coderskid</span>
                                </div>
                            </Link>
                        </div>
                        <div className="right">
                        <Link to='/' id="us-link">  
                            <div className="about-us-button" style={{fontSize: this.state.scrolled?`100%`:`85%`}}>                  
                                <div>About Us</div>                            
                            </div>
                        </Link>                        
                        </div>
                        <div className="right">
                        <Link to={this.props.namelink} style={{textDecoration: `none`, color: `black`}}>  
                            <div onClick={this.props.ordered} className="free-class-button" style={{fontSize: this.state.scrolled?`100%`:`80%`}}>
                                {this.props.name}                                
                            </div>
                        </Link>                        
                        </div>
                    </div>                    

            </div>
        );
    }
}
 
export default Navbar;