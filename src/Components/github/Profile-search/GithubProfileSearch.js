import React from "react";
import {CLIENT_ID, CLIENT_SECRETS} from "../Credentials/GithubCredentials";
import Axios from "axios";
import GithubProfile from "../Github-Profile/GithubProfile";
import GithubRepos from "../repos/GithubRepos";
import GithubProfileCard from "../Github-Profile-Components/GithubProfileCard";

class GithubProfileSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            githubUsername : '',
            githubProfile : {},
            githubRepos : [],
            errorMessage : ''
        }
    }

    //  Writing logic to Form Submit
    formSubmit = (e) => {
        e.preventDefault();
        /*console.log("User Name :- " ,this.state.githubUsername)*/
        this.searchProfile(this.state.githubUsername);
        this.searchRepos(this.state.githubUsername);

    }

//  Logic for reading data from the API
    searchProfile = (githubUsername) => {
        let dataURL = `https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID} & client_secrets=${CLIENT_SECRETS}`
        Axios.get(dataURL).then((response) => {
            /*console.log(response.data)*/
            this.setState({
                ...this.state,
                githubProfile : response.data
            })
        }).catch((error) => {
            /*console.log(error.message)*/
            this.setState({
                ...this.state,
                errorMessage : error.message
            })
        })
    }

    //  Writing logic to find Github Repos

    searchRepos = (githubUsername) => {
        let dataURL = `https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID} & client_secrets=${CLIENT_SECRETS}`
        Axios.get(dataURL).then((response) => {
            /*console.log(response.data)*/
            this.setState({
                ...this.state,
                githubRepos : response.data
            })
        }).catch((error) => {
            /*console.log(error.message)*/
            this.setState({
                ...this.state,
                errorMessage : error.message
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-danger text-white">
                                    <p className="h3 font-weight-bold font-italic">Github Profile Search App</p>
                                </div>
                                <div className="card-body bg-light">

                                    <form action="" className="form-inline" onSubmit={this.formSubmit}>
                                        <div className="form-group">
                                            <input
                                                value={this.state.githubUsername}
                                                onChange={e=> {this.setState({...this.state, githubUsername : e.target.value})}}
                                                type="search" size="30" className="form-control" placeholder="Enter Github User Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Search" className="btn btn-warning btn-sm"/>
                                        </div>
                                    </form>
                                    {/*<pre>{this.state.githubUsername}</pre>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.githubProfile).length > 0 ?
                                    <React.Fragment>
                                        <GithubProfile githubProfile={this.state.githubProfile}/>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                this.state.githubRepos.length > 0 ?
                                    <React.Fragment>
                                        <GithubRepos githubRepos={this.state.githubRepos}/>
                                    </React.Fragment> : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GithubProfileSearch;