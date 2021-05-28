import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import {connect} from 'react-redux';
import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom';

const App = ({totalPrice}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={totalPrice}/>
            <Switch>
                <Route path = '/' exact component = {MainPage}/>
                <Route path = '/main-page/' exact component = {MainPage}/>
                <Route path = '/cart-page/' exact component = {CartPage}/>
                <Route path = '/main-page/:id' component ={ItemPage}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice,
    }
}

// const mapDispatchToProps = {
//     removeItemCart,
// }

export default connect(mapStateToProps)(App);