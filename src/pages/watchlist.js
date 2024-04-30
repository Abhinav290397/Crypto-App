import { useEffect, useState } from "react";
import Header from "../components/Common/Header/header";
import get100Coins from "../functions/get100Coins";
import TabsComponent from "../components/Dashboard/Tabs";
import Button from "../components/Common/Button/button.js";
import { Link } from "react-router-dom";

const WatchList = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));//In local storage date is stored in key-value pair, "watchlist" is key. In this line we get the data associated with "watchlist".

    const[coins,setCoins] = useState([]);
    useEffect(() => {
       if(watchlist){
        getData();
       }
    },[]);

    const getData = async() => {
        const AllCoins = await get100Coins();
        if(AllCoins){
            setCoins(AllCoins.filter((x) => {          //This line of code is using the filter() method to create a new array of coins that are included in the watchlist.
                return watchlist.includes(x.id);       //In this case, the condition is watchlist.includes(coin.id). This checks if the ID of the current coin is included in the watchlist array.
            }))                                        //So, this filter() method will return a new array that includes only the coins whose IDs are in the watchlist.
        }
    }
    return(
        <div>
            <Header/>
            {
                watchlist?.length > 0 ? (
                    <TabsComponent coins={coins}/>
                ):(
                    <div>
                        <h1 style={{textAlign:"center",fontWeight:"400"}}>Sorry...No items in the Watchlist</h1>
                        <div style={{display:"flex" , justifyContent:"center" , margin:"2rem"}}>
                            <Link to="/dashboard">
                                <Button text="Dashboard" />
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default WatchList;