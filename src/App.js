import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Row,Col} from 'react-bootstrap';
import data from './data';

function App() {
  console.log(data.length)
  return (
    <>
      
      <div style={{margin:"0 auto",textAlign:"center"}}>
        <Logo width={200} height={200} fill="#dd9c4f"/>
      </div>
      
      
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/photo" eventKey="link-1">Photo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/link-2">Video</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Application</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="container">
        <div className="row">
          {data.map((d,i)=>{
            return(
              <div className="col-md-4">
                <img src={`../img/${i}.jpg`} width="80%" />
                <h4>{d.title}</h4>
                <p>{d.date}</p>
              </div>
          ) })}
        </div>
      </div>
      </>
  );
}

export default App;
