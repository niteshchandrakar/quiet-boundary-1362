

function Profile({ data }) {
    console.log(data)

    return (
        <div style={{display:"flex",justifyContent:"start"}}>
            <div>
                <img style={{ width: "250px", height: "300px", objectFit: "cover",paddingRight:"50px",paddingLeft:"200px" }} src={data.image} alt="" />
            </div>
            <div>
                <h3> <label style={{color:"#4035b8"}}>Name: </label> {data.firstname} {data.lastname}</h3>
                <h5> <label style={{color:"#4035b8"}}>Birth: </label> {data.dob}</h5>
                <h5> <label style={{color:"#4035b8"}}>Phone: </label> {data.phone}</h5>
                <h5> <label style={{color:"#4035b8"}}>Email: </label> {data.email}</h5>
                <h5> <label style={{color:"#4035b8"}}>Gender: </label> {data.gender}</h5>
                <h5> <label style={{color:"#4035b8"}}>Grade: </label> {data.class}</h5>
                <h5> <label style={{color:"#4035b8"}}>Town: </label> {data.town}</h5>
            </div>
            <div style={{marginLeft:"10%"}}>
                <h3 style={{color:"red"}}>Learning Subjects</h3>
                <h5 style={{color:"#4035b8"}}>English </h5>
                <h5 style={{color:"#4035b8"}}>Physics </h5>
                <h5 style={{color:"#4035b8"}}>Chemistry </h5>
                <h5 style={{color:"#4035b8"}}>Maths </h5>
                
            </div>

        </div>
    );
}

export default Profile;