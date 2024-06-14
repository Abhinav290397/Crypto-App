import "./style.css";

import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'; //from MUI
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

import { Tooltip } from "@mui/material";

import convertNumber from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { useState } from "react";
import {motion} from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import removeFromWatchList from "../../../functions/removeFromWatchList";
import saveItemToWatchlist from "../../../functions/saveItemToWatchlist";

const List = ({x,index, delay }) => {
    
    const watchlist = JSON.parse(localStorage.getItem("wishlist"));

    const[isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(x.id));  //It is same like watchlist ? watchlist.includes(coin.id) : false

    const starFunc = (event) => {
        if(isCoinAdded){
            removeFromWatchList(event, x.id, setIsCoinAdded);
        }else{
            setIsCoinAdded(true);
            saveItemToWatchlist(event, x.id);
        }
    }

    return(
        <Link to={`/coin/${x.id}`}>
         <motion.tr className= {`list-container ${x.price_change_percentage_24h > 0 ? "Green" : "Red"}`} key={index} initial={{opacity:0,x:-80}} whileInView={{opacity:1,x:0}} transition={{duration:0.5,delay:delay}}>
            <Tooltip title="coin info" placement="bottom-start"> 
                <td className="image-td">
                    <img src={x.image} className="coin-logo" draggable="false" />
                </td>
            </Tooltip>
            <Tooltip title="coin-symbol" placement="bottom-start">
                <td>
                <div className="name-info">
                    <p className="coin-symbol">{x.symbol}</p>
                    <p className="coin-name">{x.name}</p>
                </div>
            </td>
            </Tooltip>
         {
           x.price_change_percentage_24h > 0 ? (
           <Tooltip title="price change in 24Hrs" placement="bottom-start">
            <td className="chip-flex">
                <div className="price-chip">
                    { x.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="trend-chip  td-icon">
                    <TrendingUpRoundedIcon/>
                </div>
            </td>
           </Tooltip>
         ) : (
            <Tooltip title="price change in 24Hrs" placement="bottom-start">
                <td className="chip-flex">
                <div className="price-chip  chip-red">
                    {x.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="trend-chip red  td-icon">
                    <TrendingDownRoundedIcon/>
                </div>
            </td>
            </Tooltip>
         )
         }  
            <Tooltip title="Currnt Price" placement="bottom-start">
                <td>
                    <h3 style={{color:x.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}}>${x.current_price.toLocaleString()}</h3>
                </td>
            </Tooltip>
            <Tooltip title="total volume" >
                <td>
                    <p className="details total-vol"> {x.total_volume.toLocaleString()}</p>
                </td>
            </Tooltip>
            <Tooltip title="market cap">
              <td className="desktop-view">
                    <p className="details"> ${x.market_cap.toLocaleString()}</p>
               </td>
            </Tooltip>
            <Tooltip title="market cap">
              <td className="mobile-view">
                    <p className="details"> ${convertNumber(x.market_cap)}</p>
               </td>
            </Tooltip>

            <td className={x.price_change_percentage_24h < 0 ? "watchlist-icon-red" : "watchlist-icon-green"} onClick={(event) => starFunc(event)}>
                {
                    isCoinAdded ? <StarIcon/> : <StarOutlineIcon/>
                }
            </td>
        </motion.tr>
        </Link>
    )
}
    

export default List;