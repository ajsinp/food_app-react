import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count]=useState(0);
    const [count1]=useState(1);

    useEffect (() =>{
         //API Calls
    },[]);

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count={count1}</h1>
            <h2>Name: {name}</h2>
            <h3>LOcation: Bengaluru</h3>
            <h3>Contact: ajaysingh98147@gmail.com</h3>
        </div>
    );
};

export default User;