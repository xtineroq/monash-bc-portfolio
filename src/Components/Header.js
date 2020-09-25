import React from 'react';

function Header(props) {

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">Projects</a></li>
                    <li><a className="smoothscroll" href="#resume">About</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="row banner">
            
                <div className="banner-text">
                    <h1 className="responsive-headline">{props.name}</h1>
                    <h3>{props.tagline}</h3>
                    <hr />
                    <ul className="social">
                    <a href={props.github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                    <a href={props.linkedIn} className="button btn project-btn"><i className="fa fa-book"></i>LinkedIn</a>
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#projects"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    );
}

export default Header;
