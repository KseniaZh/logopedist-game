import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Phone from '../../components/Products/Phone';
import ProductsList from './ProductsList';
import Product from '../../components/Products/Product';

function Products (props){
  //  <Route path="/products/phones" component={Phone} /> 
    return(

        <div className="">
            Products
            <Switch>
                <Route exact path="/products" component={ProductsList} />
                <Route path="/products/:id?/:name?" component={Product} />
            </Switch>
             
        </div>

    )
}

export default Products
