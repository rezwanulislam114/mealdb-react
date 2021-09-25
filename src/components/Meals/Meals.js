import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
import Order from '../Order/Order';


const Meals = () => {
    
    // use state for searched meal
    const [searchedMeals, setSearchedMeals] = useState([]);

    // use state for meals 
    const [meals, setMeals] = useState([])

    // use state for order 
    const [order, setOrder] = useState([]);

    // use effect for meals (call api) 
    useEffect(() => {
        fetch ('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then (res => res.json())
        .then (data => {
            setMeals(data.meals);
            setSearchedMeals(data.meals)
        });
    }, [])


    //search input
    const handleSearchInput = event => {
        const searchName = event.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
        fetch (url)
        .then (res => res.json())
        .then (data => setSearchedMeals(data.meals))
    }

    // order button fuction emplement 
    const handleOrderButton = meal => {
        console.log(meal.strMeal)
        const orderMeals = [...order, meal];
        setOrder(orderMeals)
    }
    return (
        <div>
            <div className="search-section">
                <input onChange={handleSearchInput} placeholder="Search Items" type="text" />
            </div>
            <div className="meals">
                <div className="meals-section">
                    {
                        searchedMeals.map(meal => <Meal key={meal.idMeal} meal={meal} handleOrderButton={handleOrderButton}></Meal>)
                    }
                </div>
                <div className="order-section">
                    <Order order={order}></Order>
                </div>
            </div>
        </div>
    );
};

export default Meals;