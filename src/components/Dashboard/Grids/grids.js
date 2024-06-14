import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'; //from MUI
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

import { useState } from "react";

import removeFromWatchList from "../../../functions/removeFromWatchList";
import saveItemToWatchlist from "../../../functions/saveItemToWatchlist";

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";


const Grids = ({ x, index, delay }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const[isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(x.id));  //It is same like watchlist ? watchlist.includes(coin.id) : false
  const starFunc = (event) => {
    if(isCoinAdded){
      removeFromWatchList(event,x.id,setIsCoinAdded);
    }
    else{
      setIsCoinAdded(true);
      saveItemToWatchlist(event,x.id);
    }
  }
  return (
    <Link to={`/coin/${x.id}`}>
     <motion.div className= {`grid-container ${x.price_change_percentage_24h > 0 ? "Green" : "Red"}`} initial={{opacity:0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:delay}} key={index}>
      <div className="Info">
        <img src={x.image} className="coin-logo" draggable="false" />
        <div className="name-info">
          <p className="coin-symbol">{x.symbol}</p>
          <p className="coin-name">{x.name}</p>
        </div>
        <div className={ x.price_change_percentage_24h < 0 ? "watchlist-icon-red" : "watchlist-icon-green"} onClick={(event) => starFunc(event)}>
          {
            isCoinAdded ? <StarIcon/> : <StarOutlineIcon/>
          }
        </div>
      </div>  
      {
      x.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {x.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="trend-chip">
            <TrendingUpRoundedIcon/>
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip  chip-red">
            {x.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="trend-chip red">
            <TrendingDownRoundedIcon/>
          </div>
        </div>
      )
      }
      <div className="price-container">
        <h3 style={{color:x.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}}>${x.current_price.toLocaleString()}</h3>
        <div className="lower">
        <p className="details">Total Vol : {x.total_volume.toLocaleString()}</p>
        <p className="details">Market Cap : ${x.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};
export default Grids;

