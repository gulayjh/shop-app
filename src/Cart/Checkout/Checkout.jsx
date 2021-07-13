import style from "./checkout.module.css";
import Button from "../../../components/Button/Button";
import { useContext } from "react";
import Context from "../../../store/context";
import { Fragment } from "react";

const Checkout = (props) => {
    const ctx = useContext(Context);

    return (
        <Fragment>
            {ctx.listItems && (
                <div className={style.checkout}>
                    <div className={style.checkoutDetails}>
                        <span>Delivery Price</span>
                        <span>{ctx.listItems.deliveryprice}</span>
                    </div>
                    <div className={style.checkoutDetails}>
                        <span>Discount</span>
                        <span>{ctx.listItems.discount}</span>
                    </div>
                    <div className={style.total}>
                        <span>Total Price</span>
                        <span>${ctx.listItems.totalprice}</span>
                    </div>
                    <div className={style.button}>
                        <Button buttonText={props.buttonText} link="/order" />
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Checkout;
