import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About(props) {

    return (
        <section id="about-section" className="this-block">

            <h2 class="section-title">ABOUT</h2>

            {/* About Me */}
            <div class="row">
                <div id="about-me" class="col-8 col-lg-7 mx-auto">
                    <p>Hi there! I'm a month away from becoming a Full Stack Developer - woohoo! Currently juggling my 24-hour/week 9 to 5 job, 20-hour/week freelance job and being a student at Monash University's Coding Bootcamp. Yes, I'm flat out.</p>
                    <p>Having been working as a contractor for a Digital Marketing Agency, I am exposed to all sorts of aspects of building a website. Aside from seeing our web developers, UX/UI designers, etc. in action and getting inspired at what they do, I have always had this desire of being able to design, build and code a website or an application myself. That of which fuels my goal to quit my day job and become a full-time freelancer.</p>
                    <br></br>
                    <a id="resumeBtn" href="../../../public/images/resume.pdf">View Resume</a>
                </div>
            </div>

            {/* Specialties Icons */}
            <div class="container">
                <h4 class="section-title">SPECIALTIES</h4>
                <div class="row icon-container">
                    <div class="col-12 col-lg-12">
                        <div class="row">
                            <div class="col-6 col-lg-6 mb-3 icon-parent">
                                <div class="icon-box"><FontAwesomeIcon icon="fas fa-code" className="myIcon" /></div>
                                <h5 class="icon-title">Custom-built</h5>
                                <p>Well-thought-out code base.</p>
                            </div>
                            <div class="col-6 col-lg-6 mb-3 icon-parent">
                                <div class="icon-box"><FontAwesomeIcon icon="fas fa-mobile-alt" className="myIcon"/></div>
                                <h5 class="icon-title">Responsive</h5>
                                <p>Responsive layouts to suit any devices.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div class="row">
                            <div class="col-6 col-lg-6 icon-parent">
                                <div class="icon-box"><FontAwesomeIcon icon="far fa-lightbulb" className="myIcon" /></div>
                                <h5 class="icon-title">Intuitive</h5>
                                <p>Easy to use, intuitive UX/UI design.</p>
                            </div>
                            <div class="col-6 col-lg-6 icon-parent">
                                <div class="icon-box"><FontAwesomeIcon icon="fas fa-cogs" className="myIcon" /></div>
                                <h5 class="icon-title">Dynamic</h5>
                                <p>Let's make your website come to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools and Technologies Carousel */}
            <div class="tt-cont container">
                <h4 class="section-title">TOOLS &amp; TECHNOLOGIES</h4>
                <section class="tools-tech slider">
                    <div class="slide"><img src="../../../public/images/tools-logo/html5.png" alt="html5-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/css3.png" alt="css3-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/JS.png" alt="js-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/nodejs.png" alt="nodejs-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/express.png" alt="express-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/sequelize.png" alt="sequelize-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/mysql.png" alt="mysql-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/mongodb.png" alt="mongodb-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/bootstrap.png" alt="bootstrap-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/canva.png" alt="canva-logo"></img></div>
                    <div class="slide"><img src="../../../public/images/tools-logo/invision.png" alt="invision-logo"></img></div>
                </section>
            </div>

        </section>
    );
}


export default About;