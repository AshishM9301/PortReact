import React, {
    Component
} from 'react';

import { Header } from 'react-mdl';

import {
   Container, Col,Row, ListGroup, ListGroupItem
} from "reactstrap";

import ui from '../../images/Basic_Ui_68-1.jpg';
import html from '../../images/html-logo.png';
import css from '../../images/css-logo.png';
import js from '../../images/js-logo.png';
import express from '../../images/expressjs-logo.png';
import ract from '../../images/react.png';
import rdux from '../../images/redux-logo.png';
import node from '../../images/nodejs-logo.png';
import mern from '../../images/mearn-stack-logo.png';
import wordpress from '../../images/wordpress-logo.png';

class AboutPage extends Component {
    render() {
        return ( 
            <div >
            <Header className="bg-midnight-gradient text-white">
          <div className="container-fluid space-p-1 my-5">
            <Row className="row vertical-divider">
              <Col md='6'>
                <img className="img-fluid mx-auto d-block p-4 shadow rounded-circle" src={ui} />
              </Col>
              <Col md='6' className="mt-5" style={{display: 'flex'}}>
                <Row>
                  <div className="align-self-center border border-secondary mb-3 mx-auto" style={{padding: '2rem 7rem 2rem 2rem'}}>
                    <h1 className="font-weight-light">My Name is <span className="font-weight-bold"> Ashish kr
                        Mahto</span>
                    </h1>
                    <ul className="text-justify">
                      <li>
                        <h3>Self Taught</h3>
                      </li>
                      <li>
                        <h3>Business Mind</h3>
                      </li>
                      <li>
                        <h3>Technology Enthusiast</h3>
                      </li>
                      <li>
                        <h3>Realistic</h3>
                      </li>
                      <li>
                        <h3>Code Learner</h3>
                      </li>
                      <li>
                        <h3>Full Stack Dev</h3>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Header>
        <main>
          <Container>
            <Container className="space-p-1 pb-0">
              <Row>
                <h4 className="bg-lgreen mx-auto py-2 px-4 rounded-lg-1 iblock">Languages</h4>
              </Row>
              <Row className="mb-5">
                <h1 className="text-center mx-auto iblock px-3 rounded-lg-2 mt-2 py-1 bg-custom">Some Codes that I know
                </h1>
              </Row>
              <div className="mb-4">
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning rounded-circle p-1 lang-img-sm">
                          <img src={mern} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>MERN Stack</h1>
                      </div>
                      <div className=" iline align-self-center pl-3 col" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor commodi
                          molestias error totam minima sequi nemo vel ipsa. <a className="nav-link p-0 d-inline" href="mern.html">MERN Stack</a> Sites</p>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning  rounded-circle p-1 lang-img-sm">
                          <img src={html} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>HTML 5</h1>
                      </div>
                      <div className=" iline align-self-center pl-3 col" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ducimus
                          repellendus amet, possimus quia atque corporis deleniti. <a className="nav-link p-0 d-inline" href="project.html">HTML</a> Sites</p>
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning  rounded-circle p-1 lang-img-sm">
                          <img src={css} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>Css-3</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Created many projects using flex &amp; grid System and used Bootstrap &amp; TailindCss
                          also use Bootstrap for creating <a className="nav-link p-0 d-inline" href="wordpress.html">Wordpress</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning  rounded-circle p-1 lang-img-sm">
                          <img src={js} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>Java Script</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, fugit
                          repellendus sunt voluptas omnis totam quasi dolores harum reiciendis enim vero
                          aliquam laboriosam rerum dolorem animi sed provident vel perspiciatis? <a className="nav-link p-0 d-inline" href="project.html">JavaScript</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning  rounded-circle p-1 lang-img-sm">
                          <img src={wordpress} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>Wordpress</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut perspiciatis
                          beatae eligendi sapiente eum nobis nemo corrupti non eos eaque, quas laboriosam
                          voluptatibus veritatis. Libero ipsum voluptatem commodi beatae!<a className="nav-link p-0 d-inline" href="wordpress.html">Wordpress</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning  rounded-circle p-1 lang-img-sm">
                          <img src={ract} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>React</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                          exercitationem laborum totam aliquam, modi voluptatum aperiam suscipit fugit sed
                          aliquid odio ipsa autem optio asperiores distinctio molestias cumque, nulla
                          eaque.<a className="nav-link p-0 d-inline" href="react.html">React</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning rounded-circle p-1 lang-img-sm">
                          <img src={node} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>Node</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad quaerat quas
                          eveniet tempora harum, id illum laboriosam in et reiciendis nulla similique
                          dolorum alias vel aperiam? Earum, minus quaerat?<a className="nav-link p-0 d-inline" href="backendwithnode.html">Node</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning rounded-circle p-1 lang-img-sm">
                          <img src={rdux} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>React Redux</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt porro eaque
                          fugiat provident nemo eum. Veniam natus ullam soluta aliquam, et hic nulla
                          voluptatem culpa nostrum eligendi modi consectetur ipsa? <a className="nav-link p-0 d-inline" href="react.html">React Redux</a> Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="iline pl-3">
                        <div className="shadow border border-warning rounded-circle p-1 lang-img-sm">
                          <img src={express} className="img-fluid" />
                        </div>
                      </div>
                      <div className=" iline align-self-center pl-3 text-muted">
                        <h1>Express</h1>
                      </div>
                      <Col className=" iline align-self-center pl-3" style={{flexWrap: 'wrap'}}>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nobis maxime
                          dolorum magnam unde laudantium vel eligendi quas saepe animi quis consequatur
                          libero, culpa repellat debitis dolor nemo nesciunt neque.<a className="nav-link p-0 d-inline" href="backendwithnode.html">Express Node</a>
                          Sites</p>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </Container></main>
            </div >
        )
    }
}

export default AboutPage;