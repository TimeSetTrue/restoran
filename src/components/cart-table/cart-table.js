import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {removeItemCart, addItemCart, minesItem, pricePlus} from '../../actions';

const CartTable = ({items, removeItemCart, addItemCart, minesItem, pricePlus}) => {
    return (
        
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, url, price, id, itemCart, priceFull} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-col">
                                    <input className="cart__item-col-plus" 
                                        value='+' 
                                        type="button" 
                                        onClick={() => {addItemCart(id);
                                                        pricePlus()}} />
                                    <p className="cart__item-col-text">{itemCart}</p>
                                    <input className="cart__item-col-mines" 
                                        value='-' 
                                        type="button" 
                                        onClick={() => {minesItem(id);
                                                        pricePlus()}} />
                                </div>
                                <div className="cart__item-col">Сумма: {priceFull}</div>
                                <div onClick={() => {removeItemCart(id);
                                                    pricePlus()}} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items,
    }
}

const mapDispatchToProps = {
    removeItemCart,
    addItemCart,
    minesItem,
    pricePlus,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);