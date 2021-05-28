import React, {Component} from 'react';
import CartTable from '../cart-table';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
<<<<<<< HEAD
import {defaultItems, pricePlus} from '../../actions';
=======
import {defaultItems} from '../../actions';
>>>>>>> fd3f2ef73bd1dd7c942e0c6dbaba8bd73ba9c0cd
import './itemPage.css';

class CartPage extends Component {
    
    render() {
        const {RestoService, items, defaultItems, pricePlus} = this.props;
        return (
            <div className="cart"> 
                <CartTable/>
<<<<<<< HEAD
                <button className="cart__btn" 
                    onClick={() => {RestoService.setOrder(items);
=======
                <button className="cart__btn" onClick={() => {RestoService.setOrder(items);
>>>>>>> fd3f2ef73bd1dd7c942e0c6dbaba8bd73ba9c0cd
                                         defaultItems();
                                         pricePlus();
                    }}>Добавить</button>
            </div>
        )
    }
}

const mapStateToProps = ({items}) => {
    return {
        items,
    }
}

const mapDispatchToProps = {
    defaultItems,
    pricePlus,
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartPage));