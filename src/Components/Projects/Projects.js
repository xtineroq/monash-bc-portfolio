import React from 'react';
import "./style.css";

function Projects(props) {

      let projects = props.data.projects.map((project) => {
        
        return(
            console.log(project)
        );
      })

    return (
        <section id="project-section">

            <h2 className="section-title">PROJECTS</h2>

            <div className="container card-cont">
                <div className="row mx-auto">
                    <div className="col-lg-6 col-12 img-cont">
                        <div className="img-bar text-center">
                            <a href={props.projects.appUrl} className="far fa-eye"></a>
                        </div>
                        <article className="text-left">
                        <h2>{props.projects.title}</h2>
                            <h4>{props.projects.description}</h4>
                            <a href={props.projects.githubUrl}>View on Github</a>
                        </article>
                        <img src={props.projects.image} alt={props.projects.title}></img>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;