import ReactImageZoom from "react-image-zoom";
import style from "./oneProduct.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";

const OneProduct = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseHandler = () => {
        setQuantity(quantity + 1);
    };
    const decreaseHandler = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const image = {
        width: 400,
        height: 400,
        scale: 0.4,
        zoomWidth: 100,
        img: "img/cardImg.png",
    };

    return (
        <div className={style.oneProduct}>
            <div className={style.productImage}>
                <div style={{ maxWidth: "900px" }}>
                    <ReactImageZoom {...image} />
                </div>
            </div>
            <div className={style.productDetail}>
                <div className={style.productName}>
                    <h2>T-shirt</h2>
                    <h3>Monassi</h3>
                </div>
                <div className={style.productPrice}>$30</div>
                <div className={style.productSize}>
                    <h4>Size</h4>
                    <div className={style.sizeButton}>
                        <button>XS</button>
                        <button>X</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                </div>
                <div className={style.productQuantity}>
                    <h4>Quantity</h4>
                    <div className={style.quantityButton}>
                        <div onClick={decreaseHandler}>-</div>
                        <input type="number" min="0" defaultValue={quantity} />
                        <div onClick={increaseHandler}>+</div>
                    </div>
                </div>
                <div className={style.productColor}>
                    <h4>Color</h4>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

                <div className={style.addToCart}>
                    <Button link="/" buttonText="ADD TO CART" />
                </div>

                <div className={style.productInfo}>
                    <p>
                        Made of 100% good quality combed cotton. The pattern of
                        t-shirt is comfy and roomy. It doesn't shrink as long as
                        the washing instructions are heeded.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OneProduct;
