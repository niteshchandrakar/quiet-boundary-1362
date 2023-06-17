

function Profile({ data }) {
    console.log(data)

    return (
        <div style={{display:"flex",justifyContent:"start"}}>
            <div>
                <img style={{ width: "250px", height: "300px", objectFit: "cover",paddingRight:"50px",paddingLeft:"200px" }} src={data.image} alt="" />
            </div>
            <div>
                <h3> <label style={{color:"blue"}}>Name: </label> {data.firstname} {data.lastname}</h3>
                <h5> <label style={{color:"blue"}}>Birth: </label> {data.dob}</h5>
                <h5> <label style={{color:"blue"}}>Phone: </label> {data.phone}</h5>
                <h5> <label style={{color:"blue"}}>Email: </label> {data.email}</h5>
                <h5> <label style={{color:"blue"}}>Gender: </label> {data.gender}</h5>
                <h5> <label style={{color:"blue"}}>Grade: </label> {data.class}</h5>
                <h5> <label style={{color:"blue"}}>Town: </label> {data.town}</h5>
            </div>
            <div style={{marginLeft:"10%"}}>
                <h3 style={{color:"red"}}>Learning Subjects</h3>
                <h5 style={{color:"coral"}}>English </h5>
                <h5 style={{color:"coral"}}>Physics </h5>
                <h5 style={{color:"coral"}}>Chemistry </h5>
                <h5 style={{color:"coral"}}>Maths </h5>
                
            </div>

        </div>
    );
}

export default Profile;