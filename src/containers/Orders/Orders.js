import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        order:[],
        loading: true,
    }    
    
    componentDidMount(){
        axios.get('orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id : key
                    });
                }
                this.setState({ loading: false, order: fetchedOrders });
            }).catch(error => {
                this.setState({ loading: false });
            });
    }
    render() {
        return (
            <div>
                {this.state.order.map(order=>(
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);
