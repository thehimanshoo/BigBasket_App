import React from "react";
import GithubProfileCard from "../Github-Profile-Components/GithubProfileCard";
import GithubProfileDetails from "../Github-Profile-Components/GithubProfileDetails";

class GithubProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col-md-3">
                        {/* Adding Another Component */}
                        <GithubProfileCard githubProfile={this.props.githubProfile}/>
                    </div>
                    <div className="col-md-9">
                        {/* Adding Another Component For displaying Details */}
                        <GithubProfileDetails githubProfile={this.props.githubProfile}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default GithubProfile;