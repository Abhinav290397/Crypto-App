import { useEffect, useState } from "react";
import Header from "../components/Common/Header/header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search/search";
import PaginationComponent from "../components/Dashboard/Pagination/pagination";
import Loader from "../components/Common/Loader/loader";
import ScrollTop from "../components/Common/ScrollTop/scrolltop";
import get100Coins from "../functions/get100Coins";

const DashboardPage = () => {
    const[coins,setCoins] = useState([]);

    const[paginatedCoins,setPaginatedCoins] = useState([]);

    const[search,setSearch] = useState("");

    const [page, setPage] = useState(1); 

    const[isLoading,setIsLoading] = useState(true);

    const handlePageChange = (event, value) => {
      setPage(value);
      let previousIndex = (value - 1)*10;
      setPaginatedCoins(coins.slice(previousIndex,previousIndex+10));
    };

    const onSearchChange = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value);
    }
    const filteredCryptoCoins = coins.filter((x) => { // filter on basis of name and symbol using fikter fn. Converting both search value and name/symbol to lower case and then use 'includes' fn.
        return x.name.toLowerCase().includes(search.toLowerCase()) || x.symbol.toLowerCase().includes(search.toLowerCase());  //This will returns an array having names which will same as our search string.
    })
    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const myCoins = await get100Coins();
        if(myCoins){
        setCoins(myCoins);
        setPaginatedCoins(myCoins.slice(0,10));
        setIsLoading(false);
        }
    }
    return(
        <div>
            <Header/>
            <ScrollTop/>
            {
                isLoading ? <Loader/> : (
                    <div> 
                        <Search search={search} onSearchChange={onSearchChange} />
                        <TabsComponent coins={search ? filteredCryptoCoins : paginatedCoins} /> {/* When search is there pass the filteredCryptoCoins as prop (filteredCryptoCoins -> passing the array of our interest in tab component so that it can display on UI,either our searched coins or all coins.) else pass paginatedCoins as prop  */}
                        {
                            !search &&  <PaginationComponent page={page} handlePageChange={handlePageChange} /> // It means paginated component will render only when there is no search.
                        }
                    </div>
                )
            }
        </div>
    )
}
export default DashboardPage;