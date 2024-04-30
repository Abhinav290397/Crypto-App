import { useEffect, useState } from "react";
import get100Coins from "../../../functions/get100Coins";
import { MenuItem } from "@mui/material";
import {Select} from "@mui/material";  
import "./style.css";
import SelectDays from "../../Coin/SelectDays";

const SelectCoins = ({allCoins, crypto1, crypto2, handleCoinChange, days, handleDaysChange}) => {

    const styles={
        height: "2.5rem",
        color:"var(--white)",
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)"
        },
        "&:hover": {
            "&& fieldset" : {
                borderColor:"#3a80e9",
            },
        },
    } 
    return(
        <div className="select-coin-div">
            <div className="select-box">
                <p>Crypto 1</p>
                <Select sx={styles} value={crypto1} label="crypto 1" onChange={(event) => handleCoinChange(event, false)}>
                    {
                        allCoins.filter((item) => item.id != crypto2).map((x, i) => {   //Here .filter used becoz we dont want to compare same coins. so we eliminate crypto2 from crypto2 and vice versa below.
                            return <MenuItem value={x.id} key={i}>{x.name}</MenuItem>
                        })
                    }
                </Select>
            </div>
            <div className="select-box">
            <p>Crypto 2</p>
            <Select sx={styles} value={crypto2} label="crypto 2" onChange={(event) => handleCoinChange(event, true)}>
                {
                    allCoins.filter((item) => item.id != crypto1).map((x, i) => {
                        return <MenuItem value={x.id} key={i}>{x.name}</MenuItem>
                    })
                }
            </Select>
            </div>
            <SelectDays days={days} handleDaysChange={handleDaysChange} PTag={false}/>
        </div>
    )
}
export default SelectCoins;
