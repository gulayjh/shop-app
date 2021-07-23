import Loader from "../../../components/Loader/Loader";
import style from "./cartList.module.css";

const CartList = (props) => {
    return (
        <div className={style.cartlist}>
            <div className={style.listHeadArea}>
                <div className={style.listHead}>
                    <div>Product</div>
                    <div>Description</div>
                    <div>Quantity</div>
                    <div>unit price</div>
                    <div>total amount</div>
                    <div>remove</div>
                </div>
            </div>
            <div className={style.listItemArea}>
                {props.listItems ? (
                    props.listItems.listViewModel.map((item) => (
                        <div key={item.id} className={style.listItem}>
                            <div className={style.listImg}>
                                <img src={item.imageUrl} />
                            </div>
                            <div className={style.listDesc}>
                                <div className={style.listName}>
                                    {item.name}
                                </div>
                                <div className={style.listDetail}>
                                    <div>
                                        <span>Size </span>
                                        <span>{item.sizeName}</span>
                                    </div>
                                    <div>
                                        <span>Color </span>
                                        <span>{item.colorCode}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.quantity}>
                                <div className={style.quantityButton}>
                                    <button
                                        disabled={props.isChanging}
                                        onClick={() =>
                                            props.decreaseHandler(
                                                item.goodsId,
                                                item.sizeId,
                                                item.colorId
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{item.counter}</span>
                                    <button
                                        disabled={props.isChanging}
                                        onClick={() =>
                                            props.increaseHandler(
                                                item.goodsId,
                                                item.sizeId,
                                                item.colorId
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className={style.unitPrice}>${item.price}</div>
                            <div className={style.totalPrice}>
                                ${Number(item.price * item.counter).toFixed(2)}
                            </div>
                            <div
                                className={style.removeItem}
                                onClick={() => props.removeItemHandler(item.id)}
                            >
                                <span>x</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default CartList;

// const [listItems, setListItems] = useState();
// const [removeItem, setRemoveItem] = useState(false);

// const token = "C9U0VC0TMRZ5N8RBNUSKT7RG32AG5V34";

// useEffect(() => {
//     axios
//         .get(`${baseURL}Cart/getcartlist?token=${token}&lng=az`)
//         .then((res) => setListItems(res.data.obj));
// }, [removeItem]);

// const removeItemHandler = (id) => {
//     axios
//         .post(`${baseURL}Cart/deletecartitem`, {
//             cartId: id,
//             token: token,
//             oneCLick: 0,
//         })
//         .then((resp) => setRemoveItem(!removeItem));
// };

// const decreaseHandler = (goodsId, sizeId, colorId) => {
//     axios
//         .post(`${baseURL}Cart/addtocart`, {
//             goodsId: goodsId,
//             sizeId: sizeId,
//             colorId: colorId,
//             token: token,
//             counter: -1,
//         })
//         .then((resp) => setRemoveItem(!removeItem));
// };
// const increaseHandler = (goodsId, sizeId, colorId) => {
//     axios
//         .post(`${baseURL}Cart/addtocart`, {
//             goodsId: goodsId,
//             sizeId: sizeId,
//             colorId: colorId,
//             token: token,
//             counter: 1,
//         })
//         .then((resp) => setRemoveItem(!removeItem));
// };
