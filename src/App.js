import React from 'react';
import './App.css';
// import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import portfolioData from './Utils/portfolioData.json'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {

  // // Highlight current section in appBar
  // const sections = $("section");
  // const navigation_links = $("#nav-wrap a");

  // sections.waypoint({

  //   handler: function(event, direction) {

  //   let active_section;

  //   active_section = $(this);
  //   if (direction === "up") active_section = active_section.prev();

  //   const active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

  //   navigation_links.parent().removeClass("current");
  //   active_link.parent().addClass("current");

  // },
  // offset: "35%"

  // });

  return (
    <div className="App">
      <Header data={portfolioData}/>
      <Projects data={portfolioData}/>
      <About data={portfolioData}/>
      <Footer />
    </div>
  );
}

export default App;
