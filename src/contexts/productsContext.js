import React, {createContext, useState} from 'react';
import axios from "axios";
import {API_URL} from "../services/apiService";

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    let respo1 = ''
    axios
        .get(API_URL + "/articles")
        .then(response => {
            //handle success
            respo1 = response
        })
        .catch(error => {
            //handle error
        })
    const [products] = useState(respo1);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;