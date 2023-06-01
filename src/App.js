import React from "react";
import GithubProfileSearch from "./Components/github/Profile-search/GithubProfileSearch";

class App extends React.Component{
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-dark bg-dark font-weight-bold navbar-expand-sm'>
                    <a href="" className='navbar-brand  m-auto text-center'>React with Github Profile Search App</a>
                </nav>

                <GithubProfileSearch/>
                <div style={{marginBottom: `100`}}/>
            </React.Fragment>
        );
    }

}

export default App;