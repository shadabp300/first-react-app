const Comp=(props) => {
    return (
        <div className="container">
        <img alt="ProfileImage" src={props.employee.profileImg}/>
        <div className="Information">
        <h1>{props.employee.name}</h1>
        <p>Location :</p>
        <h3>{props.employee.location}</h3>
        <p>Blood Group :</p>
        <h3>{props.employee.bloodGroup}</h3>
        <p>Age :</p>
        <h3>{props.employee.age}</h3>
        </div>
        </div>
    )
}
export default Comp;