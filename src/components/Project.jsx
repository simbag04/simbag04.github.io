import React from 'react';
const Project = (props) => {
    return (
        <div className="project">
            <div className='info'>
                <div className="project-title">{props.title}</div>
                <div>{props.description} View details <a href={props.site}>here</a>!</div>

            </div>
            <div className='image'>
                <img src={props.img} alt="Project Screenshot"></img>
            </div>
        </div>
    )
}

export default Project