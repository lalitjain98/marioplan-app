import React, { Component } from 'react'
import {connect} from 'react-redux';
import { createProject, resetState } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, ()=> console.log(this.state))
        // console.log(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        this.props.createProject(this.state);
        this.setState({title: '', content: ''});
    }

    componentDidMount(){
        if(this.props.createProjectSuccess){
            this.props.resetState();
        }
    }

    render() {
        if(!this.props.auth.uid) return <Redirect to='/signin'/>
        if(this.props.createProjectSuccess){
            return <Redirect to='/'/>;
        }
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input value={this.state.title} name="title" type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea value={this.state.content} className="materialize-textarea" name="content" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Add Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth,
        err: state.project.err,
        createProjectSuccess: state.project.createProjectSuccess
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createProject: (project)=>dispatch(createProject(project)),
        resetState: ()=>dispatch(resetState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
