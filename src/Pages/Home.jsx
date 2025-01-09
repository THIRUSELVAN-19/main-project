import React from 'react'
import Layout from './Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import B1 from '../Img/B1.jpg'
import B2 from '../Img/B2.jpg'
import '../Pages/Stylesheet/Home.css'

function Home() {
  return (
    <Layout>


    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={B2}
          alt="First slide"
        />
        <Carousel.Caption id='text' >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={B1}
          alt="Second slide"
        />
        <Carousel.Caption id='text' >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={B1}
          alt="Third slide"
        />
        <Carousel.Caption id='text' >
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
      
    </Layout>
  )
}

export default Home