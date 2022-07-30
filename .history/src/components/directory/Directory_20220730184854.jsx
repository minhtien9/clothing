import React from "react";

const Directory = () => {
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
