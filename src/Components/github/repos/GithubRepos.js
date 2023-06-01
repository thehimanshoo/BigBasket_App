import React from "react";

class GithubRepos extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        let {githubRepos} = this.props;
        return (
            <React.Fragment>
                <div className="card mt-3">
                    <div className="card-header bg-warning text-center text-white">
                        <p className="h4 font-weight-bold font-italic">Your Repository</p>
                    </div>
                    <div className="card-body bg-default">
                        <ul className="list-group">
                            {
                                githubRepos.map(repo => {
                                    return(
                                        <li className="list-group-item">
                                            <div className="d-flex justify-content-between">
                                                <span className="h4 font-weight-bold font-italic">
                                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                            </span>
                                                <span className="badge badge-success">{repo.stargazers_count} Stars</span>
                                                <span className="badge badge-info">{repo.watchers} Watchers</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubRepos;