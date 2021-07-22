import ReactImageZoom from "react-image-zoom";
import style from "./oneProduct.module.css";
import Link from "next/link";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { baseURL, token } from "../../utils";

const OneProduct = () => {
    const [quantity, setQuantity] = useState(0);
    const [productDetail, setProductDetail] = useState();
    const [mainImage, setMainImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showColor, setShowColor] = useState([]);
    const [itemSize, setItemSize] = useState("");
    const [selectedSize, setSelectedSize] = useState();
    const [selectedColor, setSelectedColor] = useState();

    const router = useRouter();
    const productId = router.query.code;
    const url = `https://shopapi.inloya.com/api/GoodsInfo/goodsinfo?lng=az&code=${productId}`;

    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then((res) => {
            setProductDetail(res.data.obj);
            setIsLoading(false);
        });
    }, [router.query.code]);

    useEffect(() => {
        if (productDetail) {
            setMainImage(productDetail.mainImageUrl);
            setItemSize(productDetail.itemsize);
            setSelectedSize(productDetail.itemsize[0].id);

            let initialSize = productDetail.itemsize[0].name;
            let initialSizes = productDetail.itemsize.filter(
                (size) => size.name === initialSize
            );
            let initialColors = initialSizes.map((color) => color.colorId);

            setShowColor(initialColors);
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
    let showSizes = [];

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

    const chooseSize = (id) => {
        setSelectedSize(id);
        let updatedSizes;
        updatedSizes = itemSize.filter((size) => size.id === id);
        let colorId = updatedSizes.map((size) => size.colorId);
        setShowColor(colorId);
    };
    const selectColor = (id) => {
        setSelectedColor(id);
    };

    const addToCart = () => {
        axios
            .post(`${baseURL}Cart/addtocart`, {
                goodsId: productDetail.good.id,
                sizeId: Number(selectedSize),
                colorId: selectedColor,
                token: token,
                counter: quantity,
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <Fragment>
            <div className={style.oneProduct}>
                {!isLoading ? (
                    <Fragment>
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
                                        <div
                                            className={`${style.imageArea} ${
                                                productDetail.mainimage ===
                                                mainImage
                                                    ? style.imgActive
                                                    : null
                                            }`}
                                            onClick={() =>
                                                imageHandler(
                                                    productDetail.mainimage
                                                )
                                            }
                                        >
                                            <img
                                                src={productDetail.mainimage}
                                                alt=""
                                            />
                                        </div>
                                        {productDetail.goodimages.map(
                                            (imageUrl) => (
                                                <div
                                                    key={imageUrl}
                                                    className={`${
                                                        style.imageArea
                                                    } ${
                                                        imageUrl === mainImage
                                                            ? style.imgActive
                                                            : null
                                                    }`}
                                                    onClick={() =>
                                                        imageHandler(imageUrl)
                                                    }
                                                >
                                                    <img
                                                        src={imageUrl}
                                                        alt=""
                                                    />
                                                </div>
                                            )
                                        )}
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
                                            {productDetail.itemsize.map(
                                                (size) => {
                                                    if (
                                                        !(
                                                            showSizes.indexOf(
                                                                size.name
                                                            ) > -1
                                                        )
                                                    ) {
                                                        showSizes.push(
                                                            size.name
                                                        );
                                                        return (
                                                            <button
                                                                key={size.id}
                                                                onClick={() =>
                                                                    chooseSize(
                                                                        size.id
                                                                    )
                                                                }
                                                                className={`${
                                                                    selectedSize ===
                                                                    size.id
                                                                        ? style.sizeActive
                                                                        : style.sizeDeactive
                                                                }`}
                                                            >
                                                                {size.name}
                                                            </button>
                                                        );
                                                    }
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div className={style.productQuantity}>
                                        <h4>Quantity</h4>
                                        <div className={style.quantityButton}>
                                            <button onClick={decreaseHandler}>
                                                -
                                            </button>
                                            <span>{quantity}</span>
                                            <button onClick={increaseHandler}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className={style.productColor}>
                                        <h4>Color</h4>
                                        {productDetail.itemcolors.map(
                                            (color) => {
                                                return (
                                                    color.code && (
                                                        <button
                                                            className={`${
                                                                showColor.indexOf(
                                                                    color.id
                                                                ) > -1
                                                                    ? style.colorActive
                                                                    : style.colorDeactive
                                                            } ${
                                                                selectedColor ===
                                                                    color.id &&
                                                                style.colorSelected
                                                            }`}
                                                            key={color.id}
                                                            style={{
                                                                backgroundColor:
                                                                    color.code,
                                                            }}
                                                            disabled={
                                                                showColor.indexOf(
                                                                    color.id
                                                                ) > -1
                                                                    ? false
                                                                    : true
                                                            }
                                                            onClick={() =>
                                                                selectColor(
                                                                    color.id
                                                                )
                                                            }
                                                        ></button>
                                                    )
                                                );
                                            }
                                        )}
                                    </div>

                                    <div className={style.addToCart}>
                                        <div className={style.Button}>
                                            <Link href="cart">
                                                <button
                                                    onClick={addToCart}
                                                    disabled={
                                                        selectedColor &&
                                                        quantity > 0
                                                            ? false
                                                            : true
                                                    }
                                                >
                                                    Add to Cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={style.productInfo}>
                                        <p>
                                            {
                                                productDetail.itemlang
                                                    .fullDescription
                                            }
                                        </p>
                                    </div>
                                </div>
                            </Fragment>
                        ) : (
                            <h2>loading...</h2>
                        )}
                    </Fragment>
                ) : (
                    <Loader />
                )}
            </div>
            {productDetail ? (
                <SimilarProducts
                    goodsId={productDetail.good.id}
                    categoryId={productDetail.good.categoryId}
                />
            ) : (
                <Loader />
            )}
        </Fragment>
    );
};

export default OneProduct;
