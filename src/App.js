import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import CoinPage from "./pages/coinpage";
import ComparePage from "./pages/comparePage";
import WatchList from "./pages/watchlist";

const App = () => {
  return(
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/coin/:id" element={<CoinPage/>}/>  {/*"/coin/:id" - here /:id means it is a variable, & we can access this using useParams hook. refer to <CoinPage/> */}
        <Route path="/compare" element={<ComparePage/>} />
        <Route path="/watchlist" element={<WatchList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
