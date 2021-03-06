import "./greeting.css"
const Greeting=()=> {

    let time=new Date()
    time=time.getHours()
    let csscolor={}
    
    
    
    let greet=""
    if (0<=time && time<12) {
      greet= "Good Morning"
      csscolor.color = "green";
    }
    else if (12<=time && time<19) {
      greet="Good AfterNoon"
      csscolor.color = "orange";
    }
    else {
      greet="Good Night"
      csscolor.color = "black";
    }
    
      return (
        <div>
        <h1>Hello sir, <span style={csscolor}>{greet}</span> </h1>
        </div>
      )
    }
    
    export default Greeting