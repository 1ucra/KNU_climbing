import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function App() {
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
      </>
  );
}

export default App;
