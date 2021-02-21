import React from 'react';


function Product(props) {



    return (
        <div className="">

            <h2>Товар № {props.match.params.id} наименование {props.match.params.name}</h2>

           
        </div>
        
     )
}

export default Product
