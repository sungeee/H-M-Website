import React from 'react';

const ProductCard = ({item}) => {
    return (
    <div>
        <img src={item?.img} alt='img'/>
        <div>{item?.choice === true?"Concious choice":""}</div>
        <div>{item?.title}</div>
        <div>{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
        <div>{item?.new === true?"신상품":""}</div>
    </div>
    );
};

export default ProductCard;