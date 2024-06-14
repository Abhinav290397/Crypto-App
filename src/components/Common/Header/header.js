import "./style.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button/button.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";
const Header = () => {
    const[darkMode, setDarkMode] = useState(localStorage.getItem("theme") == "dark" ? true : false);

    useEffect(() => {
        if(localStorage.getItem("theme") == "dark"){
            setDark();
        }
        else{
            setLight();
        }
    },[]);

    const changeMode = () => {
        if(localStorage.getItem("theme") != "dark"){
            setDark();
        }
        else{
            setLight();
        }
        setDarkMode(!darkMode);
        // toast.success("Theme Changed !");
    }

    const setDark = () => {
        localStorage.setItem("theme","dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }
    const setLight = () => {
        localStorage.setItem("theme","light");
        document.documentElement.setAttribute("data-theme", "light");
    } 

    return(
        <div className="navbar">
            <h1 className="logo"><a href="/">Crypto Tracker<span style={{color:"var(--blue)"}}>.</span></a></h1>
            <div className="links">
                <Switch checked={darkMode} onClick={() => changeMode()} />
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/compare">
                    <p className="link">Compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className="link">Watchlist</p>
                </Link>
                <Link to="dashboard">
                     <Button text={"Dashboard"} run={() => console.log("Button clicked")} /*outlined={true}*/ /> 
                </Link>
            </div>

            <div className="mobile-drawer">
               <TemporaryDrawer/>
            </div>
        </div>
    )
}
export default Header;