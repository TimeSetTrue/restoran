import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';

const MenuListItem = ({menuItem, addItemCart}) => {
    const {title, url, price, category, id} = menuItem;  
    let iconClass;
    switch(category) {
        case 'salads': 
            iconClass = 'bi bi-currency-bitcoin';
            break;
        case 'pizza': 
            iconClass = "bi bi-cursor";
            break;
        case 'meat': 
            iconClass = "bi bi-dice-5-fill";
            break;
        default: 
            return '';
    }

    const icon = <i className={iconClass}></i>;


    return (
        <li className="menu__item">
            <Link to={`/main-page/${id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{icon}{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
            </Link>
                <button onClick={() => addItemCart()} className="menu__btn">Add to cart</button>
                <span className = 'menu__category_Img'></span>
           
        </li>
    )
}

export default MenuListItem;