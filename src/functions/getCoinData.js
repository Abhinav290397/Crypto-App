import axios from "axios";

const getCoinData = (id) => {
  const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
      console.log("Response h ye...", response.data);
      return response.data;
    }).catch((error) => {
      console.log("error aa gyi",error);
    });
    return myData;
};
export default getCoinData;
