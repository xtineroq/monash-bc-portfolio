import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import photo from "../../Images/me.jpg";

function Header(props) {

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#projects">Projects</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Hello! I'm {props.data.main.name}</h1>
                    <h3>{props.data.main.tagline}</h3>
                    <img src={photo} alt={props.data.main.name} id="my-photo"></img>
                    <ul className="social">
                        <a href={props.data.main.social[1]} className="button btn github-btn"><FontAwesomeIcon icon={["fab", "github"]}/></a>
                        <span>&nbsp;</span>
                        <a href={props.data.main.social[0]} className="button btn project-btn"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#projects"><FontAwesomeIcon icon={faChevronCircleDown}/></a>
            </p>
        </header>
    );
}

export default Header;
