import {Component} from 'react';
import Navbar from './navbar'
import FormInfo from './FormInfo'
import './formpage.css'

class FormPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
    }

    render(){
        return (
            <div className="formpage">
                <Navbar name="Home" namelink="/" />
            <div className="formpageSection">
                
              <div className="leftFormSection">
                <h2 className="formHead">Schedule a free online coding class. </h2>
                <p className="formPar">Prepare your child for a digital future</p>
                <div className="lottieForm">
                {<lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_bcbd2axv.json"  background="transparent"  speed="1"  style={{width: '100%', height: '70vh'}}  loop autoplay></lottie-player>}
                </div>
              </div>

                <div className="rightFormSection">
                    {/* {<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bfn7crmp.json"  background="transparent"  speed="1"  style={{width: '35%', height: '35%'}}  loop autoplay></lottie-player>} */}
              <FormInfo />
                </div>
            </div>
            </div>
        );
    }

}

export default FormPage;