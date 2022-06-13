import React from "react";
const ProductForm =()=>{

    const [inputValue, setInputValue]=React.useState({});

    // const onInputChange = (event)=>{

    // }



    return (
        <div>
            <div className="product-form">
                <label>Title : 
                    <input
                        type="text"
                        name="title"
                        value={inputValue.title}
                        onChange={onInputChange}
                    />
                </label>
                <label>Title : 
                    <input
                        type="text"
                        name="title"
                        value={inputValue.title}
                        onChange={onInputChange}
                    />
                </label>
                <label>Gender : 
                    <input
                        type="text"
                        name="gender"
                        value={inputValue.gender}
                        onChange={onInputChange}
                    />
                </label>
                <label>Price : 
                    <input
                        type="number"
                        name="price"
                        value={inputValue.price}
                        onChange={onInputChange}
                    />
                </label>
                <label>Category : 
                    <input
                        type="text"
                        name="category"
                        value={inputValue.category}
                        onChange={onInputChange}
                    />
                </label>
                <label>image : 
                    <input
                        type="text"
                        name="image"
                        value={inputValue.image}
                        onChange={onInputChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default ProductForm;