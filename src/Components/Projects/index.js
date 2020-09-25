import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function Projects(props) {

    //   let projects = props.data.projects.map((project) => {
        
    //     return(
    //         console.log(project)
    //     );
    //   })

    return (
        <section id="project-section">

            <h2 className="section-title">PROJECTS</h2>

            <div className="container card-cont">
                <div className="row mx-auto">
                    <div className="col-lg-6 col-12 img-cont">
                        <div className="img-bar text-center">
                            <a href={props.appUrl}><FontAwesomeIcon icon={faEye} /></a>
                        </div>
                        <article className="text-left">
                        <h2>{props.title}</h2>
                            <h4>{props.description}</h4>
                            <a href={props.githubUrl}>View on Github</a>
                        </article>
                        <img src={props.image} alt={props.title}></img>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;