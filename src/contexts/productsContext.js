import React, {createContext, useState} from 'react';
import axios from "axios";

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {
    const url = "http://localhost:1337/"
    let respo1 = ''
    axios
        .get(url + "/articles")
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