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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        arrows: false
    }

    return (
        <div className="container">
            <Slider {...settings}>
            <div>
                <img src={html} alt="html5-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={css} alt="css3-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={js} alt="js-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={nodejs} alt="nodejs-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={express} alt="express-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={sequelize} alt="sequelize-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={mysql} alt="mysql-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={mongodb} alt="mongodb-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={bootstrap} alt="bootstrap-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={canva} alt="canva-logo" style={{height:"120px"}}/>
            </div>
            <div>
                <img src={invision} alt="invision-logo" style={{height:"120px"}}/>
            </div>
            </Slider>
        </div>
    );
}

function About(props) {

    return (
        <section id="about" className="this-block">

            <h2 className="title">ABOUT</h2>

            {/* About Me */}
            <Container>
            <Row>
                <div id="about-me">
                    <p>{props.data.main.bio}</p>
                    <br></br>
                    <a id="resumeBtn" href="../../Images/resume.pdf">View Resume</a>
                </div>
            </Row>
            </Container>

            {/* Specialties Icons */}
            <Container>
                <h3 className="title">SPECIALTIES</h3>
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
                <h3 className="title">TOOLS &amp; TECHNOLOGIES</h3>
                <Slick />
            </div>

        </section>
    );
}


export default About;