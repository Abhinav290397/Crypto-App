import axios from "axios";
const getCoinPrices = (id, days,priceType) => {
  const prices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`).then((response) => {
    //   console.log("Full" , response.data.prices);
      console.log("Spinnnny", response.data);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log(error);
    });
  return prices;
};
export default getCoinPrices;

//Basically we r calling the api's separate functions in different js files inside function folder.