import { useEffect, useState } from "react";
import style from "./sale.module.css";
import SaleCard from "./SaleCard/SaleCard";
import ShowMore from "../../../../components/ShowMore/ShowMore";
import Link from "next/link";

const Sale = () => {
    const [sale, setSale] = useState();
    const [newSale, setNewSale] = useState();
    const [defaultShowCount, setDefaultShowCount] = useState(4);

    let responseData = "";

    useEffect(async () => {
        const response = await fetch(
            "https://shopapi.inloya.com/api/Compilation/mainpage?token=%2F&lng=en"
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
                                            <Link
                                                href={{
                                                    pathname: "/oneproduct",
                                                    query: { code: v.code },
                                                }}
                                                key={v.id}
                                            >
                                                <SaleCard
                                                    price={v.price}
                                                    name={v.name}
                                                    image={v.imageUrl}
                                                />
                                            </Link>
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
                <h2>loading...</h2>
            )}
        </div>
    );
};

export default Sale;
