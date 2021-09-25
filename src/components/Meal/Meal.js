import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const buy = <FontAwesomeIcon icon={faShoppingCart} />

const Meal = (props) => {
    // console.log(props.meal);
    const {strMeal, strCategory, strMealThumb} = props.meal;
    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <div className="meal-details">
                <h2>{strMeal}</h2>
                <p>Category: {strCategory}</p>
                <button onClick={() => props.handleOrderButton(props.meal)} className="order-button"><span>{buy}</span> Order Now</button>
            </div>
        </div>
    );
};

export default Meal;