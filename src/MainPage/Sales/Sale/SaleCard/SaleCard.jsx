import style from "./saleCard.module.css";
import SaleTag from "../../../../../components/SaleTag/SaleTag";

const SaleCard = (props) => {
    return (
        <div className={style.saleCard}>
            <img src={props.image} alt="" />
            <div className={style.cardDetail}>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
            </div>
            <SaleTag type="SALE" />
        </div>
    );
};

export default SaleCard;
