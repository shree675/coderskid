import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import './FormInfo.css'

const FormInfo = (props) => {

    const [childName, setChildName] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [parentNum, setParentNum] = useState("");
    const [childClass, setChildClass] = useState(1);

    useEffect(()=>{
      var element=document.getElementById("b1");
      element.classList.add("click-button");
    },[]);

    const handleSubmit = (evt) => {
      evt.preventDefault();

      var xhr = new XMLHttpRequest();
      var url = 'https://api.hsforms.com/submissions/v3/integration/submit/20077353/ce2d913a-67fd-407e-8ea0-2382c6c6e65c'
      var data = {
        "fields":[
          {
            "name":"firstname",
            "value":childName
          },
          {
            "name":"parent_s_name",
            "value":parentName
          },
          {
            "name":"email",
            "value":parentEmail
          },
          {
            "name":"phone",
            "value":parentNum
          },
          {
            "name":"child_s_class",
            "value":childClass
          }
        ],
        "context":{
          "pageUri":"www.coderskid.com",
          "pageName":"coders kid"
        },

      }

      // console.log(childClass);

      var final_data = JSON.stringify(data)

      xhr.open('POST', url);

      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
          alert('successfully submited');
        }else if (xhr.readyState === 4 && xhr.status === 403){
          alert(xhr.responseText);
        } else if (xhr.readyState === 4 && xhr.status === 404){
          alert(xhr.responseText);
        } 
      }

      xhr.send(final_data);
    }

    function setButton(i){
      setChildClass(i);
      for(var j=1;j<=12;j++){
        var element=document.getElementById("b"+j);
        if(j==i){
          element.classList.add("click-button");
        }
        else{
          try{
            element.classList.remove("click-button");
          } 
          catch(e){
            // leave it empty
          }
        }
      }
    }

        return(
            <div className="formInfo">
               <Form onSubmit={handleSubmit}>
               {/* <Form.Row> */}
              <Col>
               <Form.Label style={{fontFamily: `Montserrat, sans-serif`, fontWeight: `600`}}>Child's name</Form.Label>
                  <Form.Control style={{border:'1px solid darkturquoise', fontFamily: `Montserrat, sans-serif`}} placeholder="Enter Child's name" value={childName} onChange={e => setChildName(e.target.value)} />
                </Col>
                <Col style={{marginTop:'15px', fontFamily: `Montserrat, sans-serif`, fontWeight: `600`}}>
                <Form.Label>Parent's name</Form.Label>
                  <Form.Control style={{border:'1px solid darkturquoise'}} placeholder="Enter Parent's name" value={parentName} onChange={e => setParentName(e.target.value)} />
                </Col>
              {/* </Form.Row> */}

              {/* <Form.Row style={{marginTop:'20px'}}> */}
                <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:'15px', fontFamily: `Montserrat, sans-serif`, fontWeight: `600`}}>
                  <Form.Label>Parent's Email</Form.Label>
                  <Form.Control style={{border:'1px solid darkturquoise'}} type="email" placeholder="Enter Parent's email" value={parentEmail} onChange={e => setParentEmail(e.target.value)} />
                </Form.Group>

                <Form.Group  as={Col}  controlId="formGridAddress1" style={{marginTop:'15px', fontFamily: `Montserrat, sans-serif`, fontWeight: `600`}}>
                  <Form.Label>Parent's number</Form.Label>
                  <Form.Control style={{border:'1px solid darkturquoise'}} placeholder="Enter Mobile No." value={parentNum} onChange={e => setParentNum(e.target.value)} />
                </Form.Group>
                {/* </Form.Row> */}

                  <Form.Group as={Col} controlId="formGridState" style={{marginTop:'15px', fontFamily: `Montserrat, sans-serif`, fontWeight: `600`}}>
                    <Form.Label>Child's Class</Form.Label>
                    {/* <Form.Control style={{border:'1px solid gray'}} type="number" placeholder="class" value={childClass} onChange={e => setChildClass(e.target.value)} /> */}

                    <div className="class-buttons">
                      <div className="class-button">
                        <button id="b1" onClick={()=>{setButton(1)}} className="class-button-real">1<sup>st</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b2" onClick={()=>{setButton(2)}} className="class-button-real">2<sup>nd</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b3" onClick={()=>{setButton(3)}} className="class-button-real">3<sup>rd</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b4" onClick={()=>{setButton(4)}} className="class-button-real">4<sup>th</sup></button>
                      </div>
                    </div>

                    <div className="class-buttons">
                      <div className="class-button">
                        <button id="b5" onClick={()=>{setButton(5)}} className="class-button-real">5<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b6" onClick={()=>{setButton(6)}} className="class-button-real">6<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b7" onClick={()=>{setButton(7)}} className="class-button-real">7<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b8" onClick={()=>{setButton(8)}} className="class-button-real">8<sup>th</sup></button>
                      </div>
                    </div>

                    <div className="class-buttons">
                      <div className="class-button">
                        <button id="b9" onClick={()=>{setButton(9)}} className="class-button-real">9<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b10" onClick={()=>{setButton(10)}} className="class-button-real">10<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b11" onClick={()=>{setButton(11)}} className="class-button-real">11<sup>th</sup></button>
                      </div>
                      <div className="class-button">
                        <button id="b12" onClick={()=>{setButton(12)}} className="class-button-real">12<sup>th</sup></button>
                      </div>
                    </div>

                  </Form.Group>

                <div style={{textAlign: `center`, marginTop:'30px'}}>
                  <div onClick={props.ordered} style={{marginRight:'20px'}}>
                    {/* <Link to='/'> <Button variant="danger" type="submit">
                      Back
                    </Button>
                    </Link> */}
                  </div>
                  <Button variant="primary" type="submit" className="submit-button">
                    SUBMIT
                  </Button>
                </div>
              </Form>
        </div>
      );
}

export default FormInfo;