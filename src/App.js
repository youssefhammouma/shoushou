import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import About from "./pages/basic/about";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomePage from "./pages/basic/homePage";
import Contact from "./pages/basic/contact";
import Product from "./pages/products/product";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import {isConnected} from "./services/user/userService";
import Profile from "./pages/profile/profile";
import Payment from "./pages/payment/payment";
import CartContextProvider from "./contexts/cartContext";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {HelmetProvider} from 'react-helmet-async';
import Cart from "./pages/payment/cart";
import ProductsContextProvider from "./contexts/productsContext";
import DeliveryInfo from "./pages/payment/deliveryInfo";
import Unauthorized from "./components/unauthorized";
import ProtectedRoute from "./components/route/protectedRoute";
import Orders from "./pages/profile/orders";

library.add(fas)

export const AuthContext = React.createContext({
    isConnected: false,
    setConnected: (value) => {
    }
})

function App() {
    const [auth, setAuth] = useState(isConnected());
    const contextValue = {
        isConnected: auth,
        setConnected: setAuth
    }
    return (
        <HelmetProvider>
            <AuthContext.Provider value={contextValue}>
                <ToastContainer/>
                <ProductsContextProvider>
                    <CartContextProvider>
                        <Router>
                            <Header/>
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/orders" component={Orders}/>
                                <ProtectedRoute path="/profile/"> <Profile/> </ProtectedRoute>
                                <Route path="/cart" component={Cart}/>
                                <Route path="/delivery" component={DeliveryInfo}/>
                                <Route path="/payment" component={Payment}/>
                                <Route exact path="/unauthorized" component={Unauthorized}/>
                                <Route path="/articles/:id" component={Product}/>
                                <ProtectedRoute path="/profile/:id"> <Profile/> </ProtectedRoute>
                                <Route path="/"> <HomePage/> </Route>
                            </Switch>
                            <Footer/>
                        </Router>
                    </CartContextProvider>
                </ProductsContextProvider>
            </AuthContext.Provider>
        </HelmetProvider>

    );
}

export default App;
