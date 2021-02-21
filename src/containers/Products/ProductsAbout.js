import React from 'react';

class ProductsAbout extends React.Component {

    render() {

        return <div>
            <h2>Товар</h2>
            <p>Категория {this.props.match.params.category}</p>
            <p>Идентификатор {this.props.match.params.id}</p>
        </div>;
    }
}

export default ProductsAbout

// функциональный компонент 

//function About (props){
//        const prodId = props.match.params.id;
//        const cat = props.match.params.category;

//        return (
//                <div>
//                    <h2>Товар</h2>
//                    <p>Категория {cat}</p>
//                    <p>Идентификатор {prodId}</p>
//                </div>
//    )
//}
//export default About