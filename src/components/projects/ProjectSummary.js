import React from 'react';
import moment from 'moment';

const ProjectSummary = (props) => {
    console.log(props.project);
    if(!props.project) return <div>Loading...</div>;
    let date = props.project.createdAt && moment(props.project.createdAt.seconds*1000).calendar();
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{props.project.title}</span>
                <p>Posted By {`${props.project.authorFirstName} ${props.project.authorLastName}`}</p>
                <p className="grey-text">
                    {date}
                </p>
            </div>
        </div>
    )
};

export default ProjectSummary;