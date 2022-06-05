import "./movie.css"

const Container= (props) => {
    return (
    <div className="container">
        <div className="box">
    <img className="image" alt="Movie Icon" src={props.imgsrc}/>
    <h2 className="mavieName">{props.movieName}</h2>
    <h3 className="title">{props.title}</h3>
    <p className="rating">{props.rating}</p>
    </div>
    </div>
    )
};
export default Container;