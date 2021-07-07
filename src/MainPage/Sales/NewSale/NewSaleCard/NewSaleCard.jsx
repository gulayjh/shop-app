import style from "./newSaleCard.module.css";
import SaleTag from "../../../../../components/SaleTag/SaleTag";

const NewSaleCard = () => {
    return (
        <div className={style.newSaleCard}>
            <img src="/img/cardImg.png" alt="" />
            <div className={style.cardDetail}>
                <h4>Floa</h4>
                <h5>30$</h5>
            </div>
            <SaleTag type="NEW" />
        </div>
    );
};

export default NewSaleCard;
