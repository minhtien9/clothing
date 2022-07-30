import React from "react";
import "./Directory.scss";

const Directory = (props) => {
    const { categories } = props;
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    title={category.title}
                    imageUrl={category.imageUrl}
                />
            ))}
        </div>
    );
};

export default Directory;
