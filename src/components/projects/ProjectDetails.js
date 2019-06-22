import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    console.log(props);
    
    if(!props.project) return <div>Loading...</div>;
    if(!props.auth.uid) return <Redirect to='signin'/>
    let date = props.project.createdAt && moment(props.project.createdAt.seconds*1000).calendar();
        return (
        <div className="container section project-details">
            <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{props.project.title}</span>
                <p>{props.project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By {`${props.project.authorFirstName} ${props.project.authorLastName}`}</div>
                <div>{date}</div>
            </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let projects = state.firestore.data.projects;
    let project = projects ? projects[id] : null;
    return {
        auth: state.firebase.auth,
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);