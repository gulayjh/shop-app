import { useEffect, useRef } from "react";
import { useContext } from "react";
import { Fragment } from "react";
import Loader from "../../../components/Loader/Loader";
import Context from "../../../store/context";
import style from "./orderForm.module.css";

const OrderForm = () => {
    const ctx = useContext(Context);

    useEffect(() => {
        ctx.getCartList();
    }, []);

    const nameRef = useRef();
    const mailRef = useRef();
    const phoneRef = useRef();
    const noteRef = useRef();
    const deliveryTypeRef = useRef();
    const regionRef = useRef();
    const timeRef = useRef();
    const receiverNameRef = useRef();
    const receiverPhoneRef = useRef();
    const payMethodRef = useRef();

    const submitOrderHandler = () => {
        const orderData = {};
    };

    return (
        <Fragment>
            {ctx.listItems ? (
                <div className={style.orderForm}>
                    <div className={style.customer}>
                        <h3>Customer</h3>
                        <form>
                            <input
                                ref={nameRef}
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                ref={mailRef}
                                type="email"
                                placeholder="E-mail"
                            />
                            <input
                                ref={phoneRef}
                                type="text"
                                placeholder="Phone"
                            />
                            <textarea
                                ref={noteRef}
                                placeholder="Note"
                            ></textarea>
                        </form>
                    </div>
                    <div className={style.delivery}>
                        <h3>Delivery</h3>
                        <form>
                            <select ref={deliveryTypeRef}>
                                <option selected disabled>
                                    Delivery Type
                                </option>
                                {ctx.listItems.deliverytypes.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <select ref={regionRef}>
                                <option selected disabled>
                                    Region
                                </option>
                                {ctx.listItems.regions.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <input
                                ref={timeRef}
                                type="time"
                                placeholder="time"
                            />
                        </form>
                    </div>
                    <div className={style.receiver}>
                        <h3>Receiver</h3>
                        <form>
                            <input
                                ref={receiverNameRef}
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                ref={receiverPhoneRef}
                                type="text"
                                placeholder="Phone"
                            />
                        </form>
                    </div>
                    <div className={style.paymentMethod}>
                        <h3>Payment Method</h3>
                        <form>
                            <select ref={payMethodRef}>
                                {ctx.listItems.paymenttypes.map((item) => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </form>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </Fragment>
    );
};

export default OrderForm;
