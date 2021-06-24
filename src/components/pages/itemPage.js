import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, errorBoun, addItemCart, pricePlus } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './itemPage.css';

class ItemPage extends Component {

	componentDidMount() {
        if( this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService, errorBoun} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(() => errorBoun())
        }
    }

	render() {
		const {loaded, addItemCart, error, pricePlus} = this.props;

		const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id);

        const{title, url, category, price, id} = item;
		
		if(loaded) {
			return (
				<div className = "item_page">
					<Spinner/>
				</div>
			)
		}

		return (
			<div className = "item_page">
                <div className="menu__item item_block">
                     <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button onClick={() => {
                        addItemCart(id);
                        pricePlus();
                    }} className="menu__btn">Add to cart</button>
                    <span className = {`menu__category_Img ${category}`}></span> 
                </div>
            </div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loaded: state.loaded,
        error: state.error,
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    errorBoun,
    addItemCart,
    pricePlus
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));