import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummarry from '../../components/Order/CheckoutSummarry/CheckoutSummarry';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';


class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummarry 
                    ingredients={this.props.ings}
                    checkoutCancel={this.checkoutCancelHandler} 
                    checkoutContinue={this.checkoutContinueHandler}
                />
                <Route exact
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    };
}

export default connect(mapStateToProps)(Checkout);