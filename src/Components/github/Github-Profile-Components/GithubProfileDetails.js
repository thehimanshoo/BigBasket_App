import React from "react";

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubProfile} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-light">
                        <span className="badge badge-success mx-2">{githubProfile.followers} Followers</span>
                        <span className="badge badge-warning mx-2">{githubProfile.public_repos} Repos</span>
                        <span className="badge badge-secondary mx-2">{githubProfile.public_gists} Gist</span>
                        <span className="badge badge-danger mx-2">{githubProfile.following} Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name : <span className="font-weight-bold">{githubProfile.name}</span>
                            </li>
                            <li className="list-group-item">
                                Location : <span>{githubProfile.location}</span>
                            </li>
                            <li className="list-group-item">
                                Email : <span>{githubProfile.company}</span>
                            </li>
                            <li className="list-group-item">
                                Instagram : <span>{githubProfile.twitter_username}</span>
                            </li>
                            <li className="list-group-item">
                                Working : <span>{githubProfile.blog}</span>
                            </li>
                            <li className="list-group-item">
                                Since : <span>{githubProfile.created_at}</span>
                            </li>
                            <li className="list-group-item">
                                Profile URL :  <a href={githubProfile.html_url} target="_blank">{githubProfile.html_url}</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubProfileDetails;