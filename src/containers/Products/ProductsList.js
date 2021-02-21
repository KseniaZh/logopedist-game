import React from 'react';
import { NavLink } from 'react-router-dom';

const phones = [
    { id: 1, name: "Apple iPhone 12 Pro" },
    { id: 2, name: "Google Pixel 5" },
    { id: 4, name: "Huawei P40 Pro" },
    { id: 3, name: "telelelelele" }
];


class ProductsList extends React.Component {

    render() {
        return <div>
            <h2>Список товаров</h2>
            <ul>
                {
                    phones.map((item)=> {
                        return <li key={item.id + "ProductsList"}>
                                    <NavLink to={`/products/${item.id}/${item.name}`}>{item.name}</NavLink>
                                </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default ProductsList

