//This code is taken from MUI library and i made some changes.
import React from 'react';
import { useState } from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';  //Do npm i @mui/lab to use these tabs.
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider, createTheme } from "@mui/material";

import "./style.css";
import Grids from '../Grids/grids';
import List from '../Lists/list';



export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const theme = createTheme({
    palette:{
        primary:{
            main: "#3a80e9",
        },
    },
}); 
  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange}  variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>

        <TabPanel value="grid">
            <div className="gridz-flex">
                {
                    coins.map((x,index) => {
                        return(
                            <Grids x={x} key={index} />
                        )
                    })
                }
            </div>
        </TabPanel>

        <TabPanel value="list">
            <table className='list-table'>
              {
                coins.map((x,index) => {
                  return(
                    <List x={x} key={index} />
                  )
                })
              }
            </table>
        </TabPanel>
      </TabContext>
      </ThemeProvider>
  );
}
