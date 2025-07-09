import React from 'react';
const Project = (props) => {
    return (
        <div className="project">
            <div className='info'>
                <div className="project-title">{props.title}</div>
                <div>{props.description + ". View a demo "}<a href={props.site} target="_blank" rel="noreferrer">here</a>!</div>
                <div>Built with {props.technologies + ". View source code "}<a href={props.repo} target="_blank" rel="noreferrer">here</a>!</div>
            </div>
            <div className='image'>
                <img src={props.img} alt="Project Screenshot"></img>
            </div>
        </div>
    )
}

export default Project