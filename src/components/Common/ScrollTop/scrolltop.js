import "./style.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ScrollTop = () => {
    // Get the button      //This code is taken from simply google(w3 school) and i made some changes accordingly.
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document,below fn will run.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return(
        <div className="scrolltop-btn" id="myBtn" onClick={() => topFunction()}>
            <ArrowUpwardIcon style={{color:"var(--blue)"}}/>  
        </div>
    )
}
export default ScrollTop;