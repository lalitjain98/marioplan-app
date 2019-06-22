import React from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';

const ProjectList = (props)=> {
    return (
        <div className="project-list section">
            {props.projects && props.projects.map(project=>(
                <Link key={project.id} to={'project/' + project.id}>
                    <ProjectSummary key={project.id} project={project}/>
                </Link>
            ))}
        </div>
    )
}

export default ProjectList;