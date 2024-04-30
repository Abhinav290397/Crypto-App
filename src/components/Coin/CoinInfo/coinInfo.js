import { useState } from "react";
import "./style.css";
const CoinInfo = ({heading,description}) => {
    const shortDescription = description.slice(0,350) + "<span style='color:var(--grey)'>Show More...</span>";
    const longDescription = description + "<span style='color:var(--grey)'>Show Less</span>";

    const[expand,setExpand] = useState(false);
    return(
        <div className="grey-wrapper">
            <h2 className="coin-info-heading">{heading}</h2>
            {
               description.length > 250 ? (
                 <p className="coin-info-desc" dangerouslySetInnerHTML={{ __html:!expand ? shortDescription : longDescription }} onClick={() => setExpand(!expand)} /> 
               ) :
               (
                <p dangerouslySetInnerHTML={{ __html:longDescription}} />
               )
            }
        </div>
    )
}
export default CoinInfo;

//In this basically we write code for show more and show less and learn about converting string anchor tag to real anchor tag.