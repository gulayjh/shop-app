import axios from "axios";
import { useState, useEffect } from "react";
import style from "./similarProducts.module.css";
import SimilarProductsCard from "./SimilarProductsCard/SimilarProductCard";
import ShowMore from "../../../components/ShowMore/ShowMore";
import Link from "next/link";

const SimilarProducts = (props) => {
    const [similar, setSimilar] = useState();
    const [count, setCount] = useState(3);

    const goodsId = props.goodsId;
    const categoryId = props.categoryId;

    useEffect(() => {
        const url = `https://shopapi.inloya.com/api/GoodsInfo/getsamectgrgoods?lng=az&categoryid=${categoryId}&goodsid=${goodsId}
        `;
        axios.get(url).then((res) => setSimilar(res.data.obj));
    }, []);

    const showMoreHandler = () => {
        setCount(count + 3);
    };

    return (
        <div className={style.similarProducts}>
            <div className={style.productsHead}>
                <h2>Similar Products</h2>
                <div className={style.productsBorder}></div>
            </div>
            <div className={style.products}>
                {similar ? (
                    similar.slice(0, count).map((item) => (
                        <Link
                            href={{
                                pathname: "/oneproduct",
                                query: { code: item.code },
                            }}
                            key={item.id}
                        >
                            <div className={style.saleCard}>
                                <SimilarProductsCard
                                    price={item.price}
                                    name={item.name}
                                    image={item.imageUrl}
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <h2>loading...</h2>
                )}
            </div>
            {similar && (
                <div className={style.button}>
                    {count < similar.length ? (
                        <ShowMore
                            onclickHandler={showMoreHandler}
                            buttonText="SHOW MORE"
                        />
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default SimilarProducts;
