import React from 'react';
import classess from './Order.css';

const Order =(props) => {
    //console.log(props);
    const ingredients = [];
    for (let key in props.ingredients){
       ingredients.push({
           name:key,
           amount: props.ingredients[key],
       });
    }
    const ingredientsNameAndamout = ingredients.map((item)=>{
        return <span key={item.name} style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }} >{item.name} : {item.amount}</span>;
    });
     
    return (
        <div className={classess.Order}>
            <p>Ingredients: {ingredientsNameAndamout}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;
