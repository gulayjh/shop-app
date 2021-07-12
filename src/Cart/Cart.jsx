import style from "./cart.module.css";
import CartList from "./CartList/CartList";
import Checkout from "./Checkout/Checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, token } from "../../utils";
import { useContext } from "react";
import Context from "../../store/context";

const Cart = () => {
    const [removeItem, setRemoveItem] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    const ctx = useContext(Context);

    useEffect(() => {
        ctx.getCartList();
    }, [removeItem]);

    const removeItemHandler = (id) => {
        axios
            .post(`${baseURL}Cart/deletecartitem`, {
                cartId: id,
                token: token,
                oneCLick: 0,
            })
            .then((resp) => setRemoveItem(!removeItem));
    };

    const decreaseHandler = (goodsId, sizeId, colorId) => {
        setIsChanging(true);
        axios
            .post(`${baseURL}Cart/addtocart`, {
                goodsId: goodsId,
                sizeId: sizeId,
                colorId: colorId,
                token: token,
                counter: -1,
            })
            .then((resp) => {
                setRemoveItem(!removeItem);
                setIsChanging(false);
            });
    };
    const increaseHandler = (goodsId, sizeId, colorId) => {
        setIsChanging(true);
        axios
            .post(`${baseURL}Cart/addtocart`, {
                goodsId: goodsId,
                sizeId: sizeId,
                colorId: colorId,
                token: token,
                counter: 1,
            })
            .then((resp) => {
                setRemoveItem(!removeItem);
                setIsChanging(false);
            });
    };

    return (
        <div className={style.cart}>
            <h2 className={style.header}>My Shopping Cart</h2>

            <div className={style.cartContent}>
                <CartList
                    isChanging={isChanging}
                    listItems={ctx.listItems}
                    increaseHandler={increaseHandler}
                    decreaseHandler={decreaseHandler}
                    removeItemHandler={removeItemHandler}
                />
                {ctx.listItems && <Checkout buttonText={"Check out"} />}
            </div>
        </div>
    );
};

export default Cart;
