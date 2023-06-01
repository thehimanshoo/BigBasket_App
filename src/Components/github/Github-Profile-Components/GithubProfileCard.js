import React from "react";

class GithubProfileCard extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubProfile} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <img src={githubProfile.avatar_url} alt="" className="img-fluid"/>
                    <div className="card-body">
                        <p className="h4 font-weight-bold font-italic text-center">{githubProfile.name}</p>
                        <small>{githubProfile.bio}</small><br/>
                        <div className="text-center">
                            <a href={githubProfile.html_url} target="_blank" className="btn btn-success btn-sm mt-3">Profile</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubProfileCard;