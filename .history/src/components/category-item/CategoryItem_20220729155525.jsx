import React from "react";
import "./CategoryItem.scss";

const CategoryItem = (props) => {
    const { id, title, imageUrl } = props;
    return (
        <div key={id} className='category-container'>
            <div className='background-image'></div>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default CategoryItem;
