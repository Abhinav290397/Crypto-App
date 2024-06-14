
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/header";
import Loader from "../components/Common/Loader/loader";
import List from "../components/Dashboard/Lists/list";
import coinObject from "../functions/convertCoinObject";
import CoinInfo from "../components/Coin/CoinInfo/coinInfo";
import getCoinData from "../functions/getCoinData";
import getCoinPrices from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import SelectDays from "../components/Coin/SelectDays";
import settingChartData from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";


const CoinPage = () => {
    const {id} = useParams(); //This "id" is a variable which must be same as provided in path.Refer App.js

    const[isLoading,setIsLoading] = useState(true);

    const[coinData,setCoinData] = useState();

    const[chartData,setChartData] = useState({});

    const[days,setDays] = useState(30);

    const [priceType,setPriceType] = useState("prices");

    useEffect(() => {
        if(id){
            getData();
        }
    },[id]);
    async function getData(){
        const Data = await getCoinData(id);
        if(Data){
            coinObject(Data, setCoinData); //Data is coming in different naming so we pass it to coinObject fn.

            const prices = await getCoinPrices(id,days,priceType);
            if(prices){
                console.log("India");
                settingChartData(setChartData,prices);
                setIsLoading(false);
            }
        }
    }
    const handleDaysChange = async(event) => {
        setIsLoading(true)
        setDays(event.target.value);
        const prices = await getCoinPrices(id,event.target.value,priceType); //event.target.value is the days which are changing while priceType remains same
        if(prices){
            settingChartData(setChartData,prices);
            setIsLoading(false);
        }
    };
    

  const handlePriceTypeChange = async(event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id,days,newType); //In this the priceType changes (newType) while the days remaining same.
    if(prices){
        settingChartData(setChartData,prices);
        setIsLoading(false);
    }
  };

    return(
        <div>
            <Header/>
            {
                isLoading ? <Loader/> : (
                    <>
                        <div className="grey-wrapper">
                            <List x={coinData} />
                        </div>
                        <div className="grey-wrapper">
                            <SelectDays days={days} handleDaysChange={handleDaysChange} PTag={true} />
                            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                            <LineChart chartData={chartData} priceType={priceType} />
                        </div>
                        <CoinInfo heading={coinData.name} description={coinData.desc}/>
                    </>
                )
            }
        </div>
    )
}
export default CoinPage;
