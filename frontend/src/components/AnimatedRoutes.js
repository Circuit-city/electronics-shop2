import React, { useState } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import Login from "./Login"
import Signup from "./Signup"
import Homepage from "./Homepage"
import Cart from './Cart';
import Checkout from './Checkout';
import '../App.css' 
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../scenes/calendar/calendar";
import Products from '../scenes/admin/Products';
import AddProduct from '../scenes/admin/ProductsManagement';
import { AnimatePresence }  from "framer-motion"

const AnimatedRoutes = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const role = localStorage.getItem("role")
    const location = useLocation()
  return (
    <>
    {role === 'true'? (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <div className="app">
           <Sidebar isSidebar={isSidebar} />
           <main className="content"  >
             <Topbar setIsSidebar={setIsSidebar} />
             <AnimatePresence>
             <Routes location={location} key={location.pathname}>
               <Route path="/" element={<Dashboard />} />
               <Route path="/team" element={<Team />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/invoices" element={<Invoices />} />
               <Route path="/form" element={<Form />} />
               <Route path="/bar" element={<Bar />} />
               <Route path="/pie" element={<Pie />} />
               <Route path="/line" element={<Line />} />
               <Route path="/faq" element={<FAQ />} />
               <Route path="/calendar" element={<Calendar />} />
               <Route path="/geography" element={<Geography />} />
               <Route path="/management" element={<Products />} />
               <Route path="/Admin" element={<AddProduct />} />
             </Routes>
             </AnimatePresence>
           </main>
         </div>
         </ThemeProvider>
    </ColorModeContext.Provider>
    ): (
      <div className='app1'>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}> 
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />

        </Routes>
        </AnimatePresence>

      
    </div>
    )}
    
   
    </>
  )
}

export default AnimatedRoutes
