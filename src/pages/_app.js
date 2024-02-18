// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "../store/store";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const isLoginPage = router.pathname === "/login" || router.pathname === "/register"


  const Layout =  isLoginPage ? AuthLayout : MainLayout;

  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <Layout>
        <Component {...pageProps} />
     </Layout> 
    // </PersistGate>
    // </Provider>
  )
}
