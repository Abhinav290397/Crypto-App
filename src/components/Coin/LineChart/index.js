import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";  //Dont remove this line.
import convertNumber from "../../../functions/convertNumbers";

//We import chart js library.   Do this ->  npm i chart.js react-chartjs-2
//And the code is taken from chart js website.
const LineChart = ({chartData,priceType,multiAxis}) => {
    const options = {
        plugins:{
            legend:{
                display:multiAxis ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect:false,
        },
        scales:{
            crypto1:{
                type: "linear",
                display:true,
                position:"left",
                ticks:{
                    callback: function (value,index,ticks){
                        if(priceType == "prices"){
                            return "$"+ value.toLocaleString();
                        }
                        else{
                            return "$" + convertNumber(value);
                        }
                    },
                },
            },
            crypto2:{
                type: "linear",
                display:true,
                position:"right",
                ticks:{
                    callback: function (value,index,ticks){
                        if(priceType == "prices"){
                            return "$"+ value.toLocaleString();
                        }
                        else{
                            return "$" + convertNumber(value);
                        }
                    },
                },
            },
        },
    };
    return(
        <div>
            <Line data={chartData} options={options} />
        </div>
    )
}
export default LineChart;