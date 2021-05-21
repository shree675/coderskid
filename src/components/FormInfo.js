import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './FormInfo.css'

const FormInfo = (props) => {

    const [childName, setChildName] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [parentNum, setParentNum] = useState("");
    const [childClass, setChildClass] = useState("");

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

        return(
            <div className="formInfo">
               <Form onSubmit={handleSubmit}>
               {/* <Form.Row> */}
    <Col>
               <Form.Label>Child's name</Form.Label>
      <Form.Control style={{border:'1px solid gray'}} placeholder="Enter Child's name" value={childName} onChange={e => setChildName(e.target.value)} />
    </Col>
    <Col style={{marginTop:'15px'}}>
    <Form.Label>Parent's name</Form.Label>
      <Form.Control style={{border:'1px solid gray'}} placeholder="Enter Parent's name" value={parentName} onChange={e => setParentName(e.target.value)} />
    </Col>
  {/* </Form.Row> */}

  {/* <Form.Row style={{marginTop:'20px'}}> */}
    <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:'15px'}}>
      <Form.Label>Parent's Email</Form.Label>
      <Form.Control style={{border:'1px solid gray'}} type="email" placeholder="Enter Parent's email" value={parentEmail} onChange={e => setParentEmail(e.target.value)} />
    </Form.Group>

    <Form.Group  as={Col}  controlId="formGridAddress1" style={{marginTop:'15px'}}>
    <Form.Label>Parent's number</Form.Label>
    <Form.Control style={{border:'1px solid gray'}} placeholder="Enter Mobile No." value={parentNum} onChange={e => setParentNum(e.target.value)} />
  </Form.Group>
  {/* </Form.Row> */}

    <Form.Group as={Col} controlId="formGridState" style={{marginTop:'15px'}}>
      <Form.Label>Child's Class</Form.Label>
      <Form.Control style={{border:'1px solid gray'}} type="number" placeholder="class" value={childClass} onChange={e => setChildClass(e.target.value)} />

    </Form.Group>

<div style={{display:'flex', marginTop:'30px'}}>
<div onClick={props.ordered} style={{marginRight:'20px'}}>
 <Link to='/'> <Button variant="danger" type="submit">
    Close
  </Button>
  </Link>
  </div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
            </div>
        );
}

export default FormInfo;