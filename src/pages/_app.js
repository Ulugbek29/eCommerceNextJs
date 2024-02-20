import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store} from "../store/store"
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { configureStore } from "@reduxjs/toolkit";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  //  const store = configureStore({reducer: {}})

  const isLoginPage = router.pathname === "/login" || router.pathname === "/register"


  const Layout =  isLoginPage ? AuthLayout : MainLayout;

  return (
    <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
    <Layout>
        <Component {...pageProps} />
     </Layout> 
     {/* </PersistGate> */}
     </Provider>
  )
}
