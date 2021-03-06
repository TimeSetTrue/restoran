import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, errorBoun, addItemCart, pricePlus} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();
        const {RestoService, menuLoaded, errorBoun} = this.props;
        
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(() => errorBoun())

    }

    render() {
        const {menuItems, loaded, addItemCart, pricePlus, error} = this.props;
       
        if(error) {
            return <Error />
        }

        if(loaded) {
            return <Spinner />
        }

        const items = menuItems.map(menuItem => {
            return <MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem} 
                        pricePlus={() => pricePlus()}
                        addItemCart={() => addItemCart(menuItem.id)}
                    />
        })

        return (
            <View items={items} />
        )
    }
};

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
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
    pricePlus,
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));