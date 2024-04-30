
import SelectDays from "../components/Coin/SelectDays";
import Header from "../components/Common/Header/header"
import SelectCoins from "../components/Compare/SelectCoins";
import { useEffect, useState } from "react";
import getCoinData from "../functions/getCoinData";
import getCoinPrices from "../functions/getCoinPrices";
import Loader from "../components/Common/Loader/loader";
import List from "../components/Dashboard/Lists/list";
import CoinInfo from "../components/Coin/CoinInfo/coinInfo";
import settingChartData from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";
import get100Coins from "../functions/get100Coins";
import coinObject from "../functions/convertCoinObject";


const ComparePage = () => {

    const[allCoins,setAllCoins] = useState([]);
    const[isLoading,setIsLoading] = useState(true);

    const[crypto1,setCrypto1] = useState("bitcoin");
    const[crypto2,setCrypto2] = useState("ethereum");

    const[crypto1Data,setCrypto1Data] = useState({});
    const[crypto2Data,setCrypto2Data] = useState({});

    const[days,setDays] = useState(30);

    const[priceType,setPriceType] = useState("prices");

    const[chartData,setChartData] = useState({
        labels:[],
        datasets:[],
    });
    
    useEffect(() => {
        getData();
    },[]);

    const getData = async(event) => {
        setIsLoading(true);
        const coinz = await get100Coins();
        if(coinz){
            setAllCoins(coinz);
            const data1 = await getCoinData(crypto1);
            const data2 = await getCoinData(crypto2);
            coinObject(data1,setCrypto1Data);
            coinObject(data1,setCrypto2Data);
            if(data1 && data2){
                const prices1 = await getCoinPrices(crypto1,days,priceType);
                const prices2 = await getCoinPrices(crypto2,days,priceType);
                settingChartData(setChartData,prices1, prices2);
                setIsLoading(false);
            }
        }    
    }

    const handleCoinChange = async(event, isCoin2) => {
        setIsLoading(true);
        if(isCoin2){
            const newCrypto2 = event.target.value;
            setCrypto2(newCrypto2);
            const data2 = await getCoinData(newCrypto2);
            coinObject(data2,setCrypto2Data);
            const prices1 = await getCoinPrices(crypto1,days,priceType);
            const prices2 = await getCoinPrices(newCrypto2,days,priceType);
            settingChartData(setChartData,prices1, prices2);
        }
        else{
            const newCrypto1 = event.target.value;
            setCrypto1(newCrypto1);
            const data1 = await getCoinData(newCrypto1);
            coinObject(data1,setCrypto2Data);
            const prices1 = await getCoinPrices(newCrypto1,days,priceType);
            const prices2 = await getCoinPrices(crypto2,days,priceType);
            settingChartData(setChartData,prices1, prices2);
        }
        setIsLoading(false);
    }

    const handleDaysChange = async(event) => {
        const newDays = event.target.value;
        setIsLoading(true);
        setDays(newDays);
        const prices1 = await getCoinPrices(crypto1,newDays,priceType);
        const prices2 = await getCoinPrices(crypto2,newDays,priceType);
        settingChartData(setChartData,prices1, prices2);
        setIsLoading(false);
    }

    const handlePriceTypeChange = async(event) => {
        const newPriceType = event.target.value;
        setIsLoading(true);
        setPriceType(newPriceType);
        const prices1 = await getCoinPrices(crypto1,days,newPriceType);
        const prices2 = await getCoinPrices(crypto2,days,newPriceType);
        settingChartData(setChartData,prices1, prices2);
        setIsLoading(false);
    }


    return(
        <div>
            <Header/>
            {
                isLoading || !crypto1Data?.id || !crypto2Data?.id ? (<Loader/>) : (
                    <>
                        <div className="compareCrypto-days">
                            <SelectCoins allCoins={allCoins} crypto1={crypto1} crypto2={crypto2} handleCoinChange={handleCoinChange} days={days} handleDaysChange={handleDaysChange}/>
                        </div>
                        <div className="grey-wrapper">
                            <List x={crypto1Data} />
                        </div>
                        <div className="grey-wrapper">
                            <List x={crypto2Data} />
                        </div>

                         <div className="grey-wrapper">
                            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                            <LineChart chartData={chartData} priceType={priceType} multiAxis={true} />
                        </div>

                        <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc}/>
                        <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc}/>
                        
                    </>
                )
            }
        </div>
    )
}
export default ComparePage;
