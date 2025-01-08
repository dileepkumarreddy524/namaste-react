import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    
    render(){
        return (
            <div>
                <h1>About</h1>
                <User name="Dileep Kumar Reddy"/>
                <UserClass name="Dileep Kumar Reddy"/>
            </div>
        );
    }
}

export default About;