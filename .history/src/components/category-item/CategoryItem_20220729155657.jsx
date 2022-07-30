import React from "react";
import "./CategoryItem.scss";

const CategoryItem = (props) => {
    const { title, imageUrl } = props;
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
