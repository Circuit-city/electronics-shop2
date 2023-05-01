import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Homepage from "./components/Homepage"
import Admin from "./components/Admin"
import AdminId from "./components/AdminId"
import Cart from './components/Cart';
import ProductsAdd from './components/ProductsAdd';
import AdminUsers from './components/AdminUsers';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Products from './scenes/admin/Products';
import AddProduct from './scenes/admin/ProductsManagement';




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const role = localStorage.getItem("role")

  
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
             <Routes>
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
           </main>
         </div>
         </ThemeProvider>
    </ColorModeContext.Provider>
    ): (
      <div className='app1'>
      
        <Routes> 
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/:id" element={<AdminId />}/>
          <Route path='/addproduct' element={<ProductsAdd />} />
          <Route path="/admin/products/:id" element={<AdminId />}/>
          <Route path='/adminusers' element={<AdminUsers />} />
        </Routes>

      
    </div>
    )}
    
   
    </>
    
  );
}

export default App; 
