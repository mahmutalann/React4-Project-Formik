import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from "react-toastify";
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
    return ( //When open home page, it will show ProductList component. Also exact opens directly ProductList component.
        <div>
            <ToastContainer poition="bottom-right" />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                        <Route path="/product/add" component={ProductAdd} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
