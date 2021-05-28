import React, {Component} from 'react';
import CartTable from '../cart-table';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {defaultItems, pricePlus} from '../../actions';
import './itemPage.css';

class CartPage extends Component {
    
    render() {
        const {RestoService, items, defaultItems, pricePlus} = this.props;
        return (
            <div className="cart"> 
                <CartTable/>
                <button className="cart__btn" 
                    onClick={() => {RestoService.setOrder(items);
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