import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, error, addItemCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.error(error));
    }

    render() {
        const {menuItems, loaded, addItemCart} = this.props;
        if(!error) {
            return <Error />
        }

        if(loaded) {
            return <Spinner />
        }

        const items = menuItems.map(menuItem => {
            return <MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem} 
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
    error,
    addItemCart,
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));