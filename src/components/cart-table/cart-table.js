import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {removeItemCart, addItemCart, minesItem, pricePlus} from '../../actions';

const CartTable = ({items, removeItemCart, addItemCart, minesItem, pricePlus}) => {
=======
import {removeItemCart, addItemCart, minesItem} from '../../actions';

const CartTable = ({items, removeItemCart, addItemCart, minesItem}) => {
>>>>>>> fd3f2ef73bd1dd7c942e0c6dbaba8bd73ba9c0cd
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
<<<<<<< HEAD
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
=======
                                    <input className="cart__item-col-plus" value='+' type="button" onClick={() => addItemCart(id)} />
                                    <p className="cart__item-col-text">{itemCart}</p>
                                    <input className="cart__item-col-mines" value='-' type="button" onClick={() => minesItem(id)} />
>>>>>>> fd3f2ef73bd1dd7c942e0c6dbaba8bd73ba9c0cd
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
<<<<<<< HEAD
    minesItem,
    pricePlus,
=======
    minesItem
>>>>>>> fd3f2ef73bd1dd7c942e0c6dbaba8bd73ba9c0cd
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);