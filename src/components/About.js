import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            gitInfo: {

            }
        }
    };

    async componentDidMount(){
        const api = await fetch("https://api.github.com/users/bhavaniKumarSedamkari");
        const json = await api.json();
        this.setState({
            gitInfo: json
        })
    };

    render(){
        return (
            <div>
            <h1>About</h1>
            <h2>Know about us more</h2>
            <UserClass name={this.state.gitInfo.login} />
           
        </div>
         )
        }
}

export default About;