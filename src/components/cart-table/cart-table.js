import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {removeItemCart} from '../../actions';

const CartTable = ({items, removeItemCart}) => {
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
                                <div className="cart__item-col">{itemCart}</div>
                                <div className="cart__item-col">Сумма: {priceFull}</div>
                                <div onClick={() => removeItemCart(id)} className="cart__close">&times;</div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);