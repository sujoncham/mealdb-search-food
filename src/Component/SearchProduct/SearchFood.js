import React from 'react';

const SearchFood = ({meal}) => {
    // console.log(props.newerfood.idMeal)
    const {idMeal, strCategory, strMeal, strMealThumb} = meal;
    return (
        <div className='p-2'>
             <img className='w-100' src={strMealThumb} alt="food" />
            <h3>{idMeal}</h3>
            <h3>{strCategory}</h3>
            <h3>{strMeal}</h3>
        </div>
    );
};

export default SearchFood;