import style from "./newSale.module.css";
import NewSaleCard from "./NewSaleCard/NewSaleCard";

const NewSale = () => {
    return (
        <div className={style.newSale}>
            <h2>New</h2>

            <div className={style.cardList}>
                <NewSaleCard />
                <NewSaleCard />
                <NewSaleCard />
                <NewSaleCard />
            </div>
        </div>
    );
};

export default NewSale;
