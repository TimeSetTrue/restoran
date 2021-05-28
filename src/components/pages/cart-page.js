import React, {Component} from 'react';
import CartTable from '../cart-table';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {defaultItems} from '../../actions';
import './itemPage.css';

class CartPage extends Component {
    
    render() {
        const {RestoService, items, defaultItems} = this.props;
        return (
            <div className="cart"> 
                <CartTable/>
                <button className="cart__btn" onClick={() => {RestoService.setOrder(items);
                                         defaultItems();
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
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartPage));