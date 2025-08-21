import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2: 2
        };
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="user-class">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    });
                }}>Increase Count</button>
                <h2>Name : {this.props.name}</h2>
                <h3>Location: mahabubnagr</h3>
                <h4>Contact : sbhavanikumar2016@gmail.com</h4>
            </div>
        )
    }
};

export default UserClass;