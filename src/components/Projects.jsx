import Project from "./Project"
import Steps from '../artifacts/3-steps.png'
import Blog from '../artifacts/blog.png'
import React from 'react';

export const Projects = () => {
    return (
        <div className="projects section">
            <ul>
                <li><Project title="3 Steps (in progress)"
                    img={Steps}
                    description="A comprehensive calculus learning platform featuring content for students to learn, unlimited practice problems, and timely reviews of material"
                    technologies="MongoDB, Express.js, React.js, Node.js, REST API, d3.js"
                    site="https://simbag04.github.io/3-steps-client"
                    repo="https://github.com/simbag04/3-steps-client">
                </Project></li>
                <li><Project title="Blog"
                    img={Blog}
                    description="A full-stack Blog application which allows users to view and comment on blog posts, as well as create, edit, and delete their own posts"
                    technologies="MongoDB, Express.js, React.js, Node.js, REST API"
                    site="https://simbag04.github.io/blog-client/"
                    repo="https://github.com/simbag04/blog-client">
                </Project></li>
            </ul>
        </div>
    )
}
