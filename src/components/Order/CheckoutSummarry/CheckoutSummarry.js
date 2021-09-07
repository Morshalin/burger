import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummarry.css'


const CheckoutSummarry = (props) => {
    return (
        <div className={classes.CheckSummary}>
            <h2>I hope it is testi</h2>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancel} > Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinue} > Confirm</Button>
        </div>
    )
}

export default CheckoutSummarry;
