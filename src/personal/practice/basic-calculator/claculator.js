import "./calculator.css"
const Add = (a,b) => {
    return (a+b)
};
const Sub = (a,b) => {
    return (a-b)
};
const Mul = (a,b) => {
    return (a*b)
};
const Div = (a,b) => {
    return (a/b)
};

const Calculator =()=> {
    return (
        <ul id="division">
        <li>Addition of Two numbers is {Add(30,40)}</li>
        <li>Substraction of Two numbers is {Sub(100,40)}</li>
        <li>Multiplication of Two numbers is {Mul(30,40)}</li>
        <li>Divison of Two numbers is {Div(30,40)}</li>
        </ul>
    )
};
export default Calculator;