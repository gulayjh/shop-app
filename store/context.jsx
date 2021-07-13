import { createContext, useState } from "react";
import axios from "axios";
import { baseURL, token } from "../utils";

const Context = createContext({
    listItems: "",
    getCartList: () => {},
});

export const ContextProvider = (props) => {
    const [cartItems, cartIistItems] = useState();

    const getCartList = () => {
        axios
            .get(`${baseURL}Cart/getcartlist?token=${token}&lng=az`)
            .then((res) => {
                cartIistItems(res.data.obj);
            });
    };

    const contextValue = {
        listItems: cartItems,
        getCartList: getCartList,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default Context;
