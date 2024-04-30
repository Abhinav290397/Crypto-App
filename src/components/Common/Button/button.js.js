import "./style.css";
const Button = ({text , run , outlined}) => {
    return(
        <div className={outlined ? "outline-btn" : "btn"} onClick={run}> {text} </div>
    )
}
export default Button;