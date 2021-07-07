import ReactImageZoom from "react-image-zoom";
import style from "./oneProduct.module.css";
import Button from "../../components/Button/Button";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const OneProduct = () => {
    const [quantity, setQuantity] = useState(0);
    const [productDetail, setProductDetail] = useState();
    const [mainImage, setMainImage] = useState();

    const router = useRouter();
    const productId = router.query.code;
    const url = `https://shopapi.inloya.com/api/GoodsInfo/goodsinfo?lng=az&code=${productId}`;

    useEffect(() => {
        axios.get(url).then((res) => setProductDetail(res.data.obj));
    }, [router.query.code]);
    useEffect(() => {
        if (productDetail) {
            setMainImage(productDetail.mainImageUrl);
        }
    }, [productDetail]);

    const increaseHandler = () => {
        setQuantity(quantity + 1);
    };
    const decreaseHandler = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    let image;

    if (mainImage) {
        image = {
            width: 560,
            zoomWidth: 200,
            height: 710,
            scale: 0.4,
            img: mainImage,
        };
    }

    const imageHandler = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <Fragment>
            <div className={style.oneProduct}>
                {productDetail ? (
                    <Fragment>
                        <div className={style.productImage}>
                            <div className={style.mainImage}>
                                {mainImage && (
                                    <div style={{ maxWidth: "900px" }}>
                                        <ReactImageZoom {...image} />
                                    </div>
                                )}
                            </div>
                            <div className={style.smallImages}>
                                {productDetail.goodimages.map((imageUrl) => (
                                    <div
                                        className={`${style.imageArea} ${
                                            imageUrl === mainImage
                                                ? style.imgActive
                                                : null
                                        }`}
                                        onClick={() => imageHandler(imageUrl)}
                                    >
                                        <img src={imageUrl} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={style.productDetail}>
                            <div className={style.productName}>
                                <h2>{productDetail.good.name}</h2>
                                <h3>Monassi</h3>
                            </div>
                            <div className={style.productPrice}>
                                ${productDetail.good.price}
                            </div>
                            <div className={style.productSize}>
                                <h4>Size</h4>
                                <div className={style.sizeButton}>
                                    {productDetail.itemsize.map((size) => (
                                        <button>{size.name}</button>
                                    ))}
                                </div>
                            </div>
                            <div className={style.productQuantity}>
                                <h4>Quantity</h4>
                                <div className={style.quantityButton}>
                                    <div onClick={decreaseHandler}>-</div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={quantity}
                                        onChange={() => {}}
                                    />
                                    <div onClick={increaseHandler}>+</div>
                                </div>
                            </div>
                            <div className={style.productColor}>
                                <h4>Color</h4>
                                {productDetail.itemcolors.map((color) => {
                                    return (
                                        color.code && (
                                            <button
                                                style={{
                                                    backgroundColor: color.code,
                                                }}
                                            ></button>
                                        )
                                    );
                                })}
                            </div>

                            <div className={style.addToCart}>
                                <Button link="/" buttonText="ADD TO CART" />
                            </div>

                            <div className={style.productInfo}>
                                <p>{productDetail.itemlang.fullDescription}</p>
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <h2>loading...</h2>
                )}
            </div>
            {productDetail ? (
                <SimilarProducts
                    goodsId={productDetail.good.id}
                    categoryId={productDetail.good.categoryId}
                />
            ) : (
                <h2>loading...</h2>
            )}
        </Fragment>
    );
};

export default OneProduct;
