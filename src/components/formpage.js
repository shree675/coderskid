import {Component} from 'react';
import Navbar from './navbar'
import FormInfo from './FormInfo'

class FormPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                
              {<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bfn7crmp.json"  background="transparent"  speed="1"  style={{width: '35%', height: '35%'}}  loop autoplay></lottie-player>}
                <div>
                    <FormInfo />
                </div>
            </div>
        );
    }

}

export default FormPage;