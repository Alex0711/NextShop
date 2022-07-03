import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import NotFound from "@pages/NotFound";
import SendEmail from "@pages/SendEmail";
import Layout from "@containers/Layout";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
//Estos imports son para crear un contexto y el CARRITO
import appContext from "@context/appContext";
import useInitailState from "@hooks/useInitialState";

import '@styles/global.scss';

const App = () => {
    const inicialState = useInitailState(); //Acá me traigo el contexto que cree
    //para poder pasarle a la aplicación
    return (
      //Esta es la aplicación que va a manejar el contexto. le debo pasar un valor inicial
      //le paso el estado y la función addToCart
      <appContext.Provider value={inicialState}> 
      <BrowserRouter basename='/reactShop'>
        <Layout>
          <Routes>
            <Route strict path="/" element={<Home />}/>
            <Route strict path="/login" element={<Login />}/>
            <Route strict path="/password-recovery" element={<PasswordRecovery />}/>
            <Route strict path="/send-email" element={<SendEmail />}/>
            <Route strict path="/new-password" element={<NewPassword />}/>
            <Route strict path="/account" element={<MyAccount />}/>
            <Route strict path="/signup" element={<CreateAccount />}/>
            <Route strict path="/checkout" element={<Checkout />}/>
            <Route strict path="/orders" element={<Orders />}/>
            <Route strict path="*" element={<NotFound />}/> {/* Este es un default */}
          </Routes>
        </Layout>
      </BrowserRouter>
      </appContext.Provider>
    );
};

export default App;