import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import DashboardPage from "./pages/dashboardPage";
import CoinPage from "./pages/coinpage";
import ComparePage from "./pages/comparePage";
import WatchList from "./pages/watchlist";
import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./index.css";


const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return(
    <div className="app">
      {/* <ToastContainer /> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/coin/:id" element={<CoinPage/>}/>  {/*"/coin/:id" - here /:id means it is a variable, & we can access this using useParams hook. refer to <CoinPage/> */}
            <Route path="/compare" element={<ComparePage/>} />
            <Route path="/watchlist" element={<WatchList/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}
export default App;
