import React from 'react';
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobileAlt, faLightbulb, faCogs } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import html from "../../Images/tools-logo/html5.png";
import css from "../../Images/tools-logo/css3.png";
import js from "../../Images/tools-logo/JS.png";
import nodejs from "../../Images/tools-logo/nodejs.png";
import express from "../../Images/tools-logo/express.png";
import sequelize from "../../Images/tools-logo/sequelize.png";
import mysql from "../../Images/tools-logo/mysql.png";
import mongodb from "../../Images/tools-logo/mongodb.png";
import bootstrap from "../../Images/tools-logo/bootstrap.png";
import canva from "../../Images/tools-logo/canva.png";
import invision from "../../Images/tools-logo/invision.png";


const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <div className="container">
            <Slider {...settings}>
            <div style={{height:"100px"}}>
                <img src={html} alt="html5-logo"/>
            </div>
            <div>
                <img src={css} alt="css3-logo"/>
            </div>
            <div>
                <img src={js} alt="js-logo"/>
            </div>
            <div>
                <img src={nodejs} alt="nodejs-logo"/>
            </div>
            <div>
                <img src={express} alt="express-logo"/>
            </div>
            <div>
                <img src={sequelize} alt="sequelize-logo"/>
            </div>
            <div>
                <img src={mysql} alt="mysql-logo"/>
            </div>
            <div>
                <img src={mongodb} alt="mongodb-logo"/>
            </div>
            <div>
                <img src={bootstrap} alt="bootstrap-logo"/>
            </div>
            <div>
                <img src={canva} alt="canva-logo"/>
            </div>
            <div>
                <img src={invision} alt="invision-logo"/>
            </div>
            </Slider>
        </div>
    );
}

function About(props) {

    return (
        <section id="about" className="this-block">

            <h2 className="section-title">ABOUT</h2>

            {/* About Me */}
            <Container>
            <Row>
                <div id="about-me" className="col-8 col-lg-7 mx-auto">
                    <p>Hi there! I'm a month away from becoming a Full Stack Developer - woohoo! Currently juggling my 24-hour/week 9 to 5 job, 20-hour/week freelance job and being a student at Monash University's Coding Bootcamp. Yes, I'm flat out.</p>
                    <p>Having been working as a contractor for a Digital Marketing Agency, I am exposed to all sorts of aspects of building a website. Aside from seeing our web developers, UX/UI designers, etc. in action and getting inspired at what they do, I have always had this desire of being able to design, build and code a website or an application myself. That of which fuels my goal to quit my day job and become a full-time freelancer.</p>
                    <br></br>
                    <a id="resumeBtn" href="../../../public/images/resume.pdf">View Resume</a>
                </div>
            </Row>
            </Container>

            {/* Specialties Icons */}
            <Container>
                <h4 className="title">SPECIALTIES</h4>
                <Container className="icon-container">
                    <Row>
                        <Col lg={6} className="mb-3 icon-parent">
                            <div className="icon-box"><FontAwesomeIcon icon={faCode} className="myIcon" /></div>
                            <h5 className="icon-title">Custom-built</h5>
                            <p>Well-thought-out code base.</p>
                        </Col>
                        <Col lg={6} className="mb-3 icon-parent">
                            <div className="icon-box"><FontAwesomeIcon icon={faMobileAlt} className="myIcon"/></div>
                            <h5 className="icon-title">Responsive</h5>
                            <p>Responsive layouts to suit any devices.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="icon-parent">
                            <div className="icon-box"><FontAwesomeIcon icon={faLightbulb} className="myIcon" /></div>
                            <h5 className="icon-title">Intuitive</h5>
                            <p>Easy to use, intuitive UX/UI design.</p>
                        </Col>
                        <Col lg={6} className="icon-parent">
                            <div className="icon-box"><FontAwesomeIcon icon={faCogs} className="myIcon" /></div>
                            <h5 className="icon-title">Dynamic</h5>
                            <p>Let's make your website come to life.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Tools and Technologies Carousel */}
            <div className="tt-cont">
                <h4 className="title">TOOLS &amp; TECHNOLOGIES</h4>
                <Slick />
            </div>

        </section>
    );
}


export default About;