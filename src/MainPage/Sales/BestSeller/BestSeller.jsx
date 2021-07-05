import style from "./bestSeller.module.css";
import BestSellerCard from "./BestSellerCard/BestSellerCard";
import ShowMore from "../../../../components/ShowMore/ShowMore";

const BestSeller = () => {
    return (
        <div className={style.bestSeller}>
            <h2>Our Best Sellers</h2>
            <div className={style.sellerMenu}>
                <ul>
                    <li>MEN</li>
                    <li>Women</li>
                </ul>
            </div>

            <div className={style.cardList}>
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
                <BestSellerCard />
            </div>

            <div className={style.cardButton}>
            <ShowMore buttonText="Show more"/>
            </div>
        </div>
    );
};

export default BestSeller;
