import React from 'react';
import "./style.css";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import photo from "../../Images/me.jpg";

function Header(props) {

    // set header height to be equal to browser height
    $("header").css({ "height": $(window).height() });
    $(window).on("resize", function() {
 
        $("header").css({ "height": $(window).height() });
        $("body").css({ "width": $(window).width() })
    });
    
    // Fade In/Out appBar
    $(window).on("scroll", function() {
		var h = $("header").height();
		var y = $(window).scrollTop();
        var nav = $("#nav-wrap");

        if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
            nav.fadeOut("fast");
        }
        else {
            if (y < h*.20) {
                nav.removeClass("opaque").fadeIn("fast");
            }
            else {
                nav.addClass("opaque").fadeIn("fast");
            }
        }
    });
    
    // smooth scroll
    $(".smoothscroll").on("click",function (e) {
        e.preventDefault();

        const target = this.hash,
        $target = $(target);

        $("html, body").stop().animate({
            "scrollTop": $target.offset().top
        }, 800, "swing", function () {
            window.location.hash = target;
        });
    });

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
                    <h2>{props.data.main.tagline}</h2>
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
