import React from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux'

const ProjectList = (props)=> {
    return (
        <div className="project-list section">
            {props.projects && props.projects.map(project=><ProjectSummary key={project.id} {...project}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(ProjectList);