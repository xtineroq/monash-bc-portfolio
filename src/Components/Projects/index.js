import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Container, Col } from "react-bootstrap";

function Projects(props) {
    // map each project data to be rendered
    let projects = props.data.portfolio.projects.map((project) => {
      
    // adding line break to titles
    let formattedTitle = project.title.replace("\\n", "\n");

    // images need to be required to render
    let projectImage = require("../../Images/" + project.image);

    return (
      <Col lg={6} md={6} sm={12} className="img-cont" key={project.title}>
        <img src={projectImage} alt={project.title}></img>
        <article>
          <h2>{formattedTitle}</h2>
          <h4>{project.description}</h4>
          <a href={project.githubUrl} style={{ textDecoration: "none" }}>
            View on Github
          </a>
        </article>
        <div className="img-bar text-center">
          <a href={project.appUrl}>
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </Col>
    );
  });

  return (
    <section id="projects">
      <h2 className="section-title">PROJECTS</h2>
      <Container className="card-cont">
        {projects}
      </Container>
    </section>
  );
}

export default Projects;
