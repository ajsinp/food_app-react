import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        };
         
    }
    async  componentDidMount() {
        //console.log("Child Componenet DidMount");
        
        const data = await fetch("https://api.github.com/users/ajsinp");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    componentDidUpdate() {
        console.log("Cmponent didUpdate");
    }

    componentWillUnmount() {
        console.log("Cmponent will Unmount");
    }
     
    render() {
        const {name,location,avatar_url} = this.state.userInfo;
        
        return (
            < div className="user-card">
                <h2>Name: {name }</h2>
                <h3>LOcation: {location}</h3>
                <img src={avatar_url}/>
                <h3>Contact: ajaysingh98147@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass  ; 