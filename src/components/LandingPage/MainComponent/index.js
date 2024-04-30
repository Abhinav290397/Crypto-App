import Button from "../../Common/Button/button.js";
import iPhone from "../../../assets/iPhone.png";
import shadow from "../../../assets/shadow.png";

import {motion} from "framer-motion";  //We r uning framer motion library to give animations,Do 'npm i framer-motion' to give animation to the components and use this way <motion.tagName></motion.tagName>
import "./style.css";
const MainComponent = () => {
    return(
        <div className="main">
            <div className="left-component">
                <motion.h1 className="lf1" initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}}>Track Crypto</motion.h1>
                <motion.h1 className="lf2" initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:0.2}}>Real Time.</motion.h1>

                <motion.p className="info" initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:0.3}}>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>

                <motion.div className="btn-main" initial={{opacity:0,x:50}} animate={{opacity:1,x:1}} transition={{duration:0.5,delay:1}}>
                    <Button text={"Dashboard"} />
                    <Button text={"Share"} outlined={true} />
                </motion.div>
            </div>  

            <div className="right-component">
                <motion.img src={iPhone} alt="pic1" className="iPhone" initial={{y:-15}} animate={{y:15}} transition={{type:"smooth" , repeatType:"mirror", duration:2 , repeat:Infinity}} />
                <img src={shadow} alt="pic2" className="shadow" />
            </div>
        </div>
    )
}
export default MainComponent;