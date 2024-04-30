//Do npm i react-toastify to use toastify in react.
import { toast } from "react-toastify";

const removeFromWatchList = (event, id, setIsCoinAdded) => {
    event.preventDefault();
    if(window.confirm("Are you sure!! you want to delete this coin")){
        let watchlist = JSON.parse(localStorage.getItem("watchlist"));
        let newList = watchlist.filter((x) => {  //filter returns a new array which does not contain coins whose id is same as come as props.
            return x != id;
        })
        setIsCoinAdded(false);
        localStorage.setItem("watchlist",JSON.stringify(newList)); //storing the new list again in localstorage .

        toast.success(`${id.substring(0,1).toUpperCase() + id.substring(1)} has been removed from watchlist!`); //successfully remove the coin from watchlist.
        window.location.reload();
    }
    else{
        toast.error(`${id.substring(0,1).toUpperCase() + id.substring(1)} couldn't remove the coin from the watchlist!`);
        setIsCoinAdded(true);
    }
}
export default removeFromWatchList;