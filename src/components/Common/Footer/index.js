import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = () => {
    const topFunc = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <motion.div className="footer" initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.4}}>
            <h2 className="logo" onClick={() => topFunc()}>
                CryptoTracker<span>.</span>
            </h2>
            <div className="social-links">
                <Link to="mailto:abhinav.mw20001@gmail.com">
                    <MailOutlineIcon className="social-link"/>
                </Link>
                <Link to="https://facebook.com">
                    <FacebookIcon className="social-link"/>
                </Link>
                <Link to="https://www.instagram.com">
                    <InstagramIcon className="social-link"/>
                </Link>
                <Link to="https://www.twitter.com">
                    <XIcon className="social-link"/>
                </Link>
            </div>
        </motion.div>
    )
}
export default Footer;