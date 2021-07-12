import { useContext } from "react";
import { useEffect } from "react";
import Context from "../../store/context";
import Checkout from "../Cart/Checkout/Checkout";
import style from "./order.module.css";
import OrderForm from "./OrderForm/OrderForm";

const Order = () => {
    const ctx = useContext(Context);

    useEffect(() => {
        ctx.getCartList();
    }, []);

    return (
        <div className={style.order}>
            <OrderForm />
            <Checkout buttonText={"order"} />
        </div>
    );
};

export default Order;
