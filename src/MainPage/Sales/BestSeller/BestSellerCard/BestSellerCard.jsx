import style from "./bestSellerCard.module.css";

const BestSellerCard = () => {
    return (
        <div className={style.bestSellerCard}>
            <img src="/img/cardImg.png" alt=""/>
            <div className={style.cardDetail}>
                <h4>Floa</h4>   
                <h5>30$</h5>
            </div>
        </div>
    );
};

export default BestSellerCard;