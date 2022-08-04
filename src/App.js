import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Row,Col,Card,Carousel} from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  
  return (
    <>
      
      <div style={{margin:"0 auto",textAlign:"center"}}>
      <Link to="/">
        <Logo width={200} height={200} fill="#dd9c4f"/>
        </Link>
      </div>

      <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="../img/캐러셀1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="../img/캐러셀2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
      
      
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/photo" eventKey="link-1">Photo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/video" eventKey="/link-2">Video</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/application" eventKey="link-2">Application</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>

      <div className="container">
        포토 갤러리
        <div className="row">
          {data.map((d,i)=>{
            return(
              <div className="col-md-4">
                <Card>
        <Card.Img variant="top" src={`../img/${i}.jpg`}  />
        <Card.Body>
          <Card.Text>
          <h4>{d.title}</h4>
          <p>{d.date}</p>
          </Card.Text>
        </Card.Body>
      </Card>

              </div>
          ) })} 
        </div>
        <div>
          클라이밍 동영상
        </div>
      </div>
      <Routes>
        <Route path="/detail" element={ <div>상세페이지임</div> } />
      </Routes>
      </>
      
      
  );
}

export default App;
