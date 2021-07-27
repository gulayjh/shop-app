import { useEffect, Fragment, useState } from "react";
import style from "./sale.module.css";
import SaleCard from "./SaleCard/SaleCard";
import SaleTag from "../../../../components/SaleTag/SaleTag";
import ShowMore from "../../../../components/ShowMore/ShowMore";
import Link from "next/link";
import Loader from "../../../../components/Loader/Loader";
import { baseURL } from "../../../../utils";

const Sale = () => {
    const [sale, setSale] = useState();
    const [newSale, setNewSale] = useState();
    const [defaultShowCount, setDefaultShowCount] = useState(4);
    const [addToFav, setAddToFav] = useState([])


    let responseData = "";

    useEffect(async () => {
        const response = await fetch(
            `${baseURL}Compilation/mainpage?token=%2F&lng=en`
        );
        responseData = await response.json();

        if (responseData) {
            let newArr = responseData.obj;
            // responseData.obj.map((item, index) => {
            //     newArr[index] = {
            //         name: item.name,
            //         id: item.id,
            //         goods: item.goods.slice(0, 4),
            //     };
            // });
            responseData.obj.map((item, index) => {
                newArr[index].showCount = defaultShowCount;
            });
            setSale(newArr);
        }
    }, []);
    const handleShowMore = (index) => {
        let updated = sale;
        updated[index].showCount = updated[index].showCount + defaultShowCount;

        setSale([...updated]);
    };

    return (
        <div className={style.sale}>

            {sale ? (
                sale.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <div className={style.cardList}>
                                {item.goods.map((v, index) => {
                                    return (
                                        index < item.showCount && (
                                            <div className={style.saleCard}>
                                                <Link
                                                    href={{
                                                        pathname: "/oneproduct",
                                                        query: { code: v.code },
                                                    }}
                                                    key={v.id}
                                                >
                                                    <div>
                                                        <SaleCard
                                                            price={v.price}
                                                            name={v.name}
                                                            image={v.imageUrl}
                                                        />
                                                    </div>
                                                </Link>
                                                <SaleTag
                                                    id={v.id}
                                                />
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                            <div className={style.showmore}>
                                {item.showCount < item.goods.length ? (
                                    <ShowMore
                                        onclickHandler={() =>
                                            handleShowMore(index)
                                        }
                                        // index={index}
                                        // sale={sale}
                                        // newSale={newSale}
                                        // setNewSale={setNewSale}
                                        buttonText="SHOW MORE"
                                    />
                                ) : null}
                            </div>
                        </div>
                    );
                })
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Sale;
