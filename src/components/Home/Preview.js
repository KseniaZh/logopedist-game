import React from 'react';
import PreviewElement from './PreviewElement';

function Preview(props) {

    return(

        <div
            className={props.classname}
        >
            {
                props.previewItems.map((item, index) => {
                    return <PreviewElement
                                key={index}
                                item={item}
                            />
                })
            }
            
        </div>
  
    )
}

export default Preview