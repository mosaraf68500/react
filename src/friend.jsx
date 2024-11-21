export default function Friend(user){

    // console.log(user);

    const style={
        border:'1px solid purple',
        padding:'10px',
        
        borderRadius:'5px',
        margin:'10px'
    }

    return(

        <div style={style}>

            <h3>Name:{user.name}</h3>
            <p>Email:{user.email}</p>
        </div>
    )
}