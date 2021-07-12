import React from 'react'
import style from './catalogContent.module.css'
import Pagination from '../../../components/Pagination/Pagination'

const CatalogContent = ({ data }) => {

    return (
        <div className={style.ProductCardContainer}>
            {data && data.length > 0 && data.map((item) => (
                <div className={style.ProductCardContent}>
                    <div className={style.ProductImage}>
                        <img src={item.imageUrl} onError={(event) => event.target.style.display = 'none'} ></img>
                    </div>
                    <div className={style.ProductName}>
                        <span>{item.name}</span>
                        <span>{item.categoryName}</span>
                    </div>
                    <div className={style.ProductPrice}>
                        <span>{item.price} AZN</span>

                        {item.discountChk ?
                            <span>{item.discountPrice} AZN</span> : null
                        }
                    </div>
                    <div className={style.ButtonContent}>
                        <button>Add to Cart</button>
                        <button>More</button>
                    </div>
                </div>
            ))}
            <Pagination count={5} />
        </div>
    );
}

export default CatalogContent;