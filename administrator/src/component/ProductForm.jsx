import React from "react";
const ProductForm =()=>{

    const [inputValue, setInputValue]=React.useState({});

    const onInputChange = (event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputValue({...inputValue,[name]:value});
    }

    const addProduct = (event) =>{
        event.preventDefault();
        const payload = {
            title:inputValue.title,
            gender:inputValue.gender,
            price:inputValue.price,
            category:inputValue.category,
            image:inputValue.image
        }

        fetch('http://localhost:3001/product',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            }
        });
        
    }

    return (
        <div>
            <div className="product-form">
                <label>Title<br/>
                    <input
                        type="text"
                        name="title"
                        value={inputValue.title}
                        onChange={onInputChange}
                    />
                </label><br/>
                <label>Gender<br/> 
                    <input
                        type="text"
                        name="gender"
                        value={inputValue.gender}
                        onChange={onInputChange}
                    />
                </label><br/>
                <label>Price<br/> 
                    <input
                        type="number"
                        name="price"
                        value={inputValue.price}
                        onChange={onInputChange}
                    />
                </label><br/>
                <label>Category<br/> 
                    <input
                        type="text"
                        name="category"
                        value={inputValue.category}
                        onChange={onInputChange}
                    />
                </label><br/>
                <label>image<br/> 
                    <input
                        type="text"
                        name="image"
                        value={inputValue.image}
                        onChange={onInputChange}
                    />
                </label><br/>
                <button onClick={addProduct}> Add Product</button>
            </div>
        </div>
    )
}

export default ProductForm;