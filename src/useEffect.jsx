import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Users(){

    const [User, setUser]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=> setUser(data))
    }
        
        
        ,[]);


        const styles={
            border:'2px solid tomato',
            padding:'20px',
            margin:'20px'
        }

    return (
        <div style={styles} >

            <h1>Users:{User.length}</h1>
            {
            User.map(user=> <Friend user={user}></Friend>)
            }
        </div>
    )
}