import React from "react";
import DisplayProduct from "./DisplayProduct";
const ProductForm =()=>{
    const [product, setProduct]=React.useState([])
    const [inputValue, setInputValue]=React.useState({});
    const [loading, setLoading]=React.useState(false);
    const [error, setError]=React.useState(false);
    const [page,setPage]=React.useState(1)
    const pageLimit=5;

    React.useEffect(()=>{
        setLoading(true);
        let url="http://localhost:3001/product?_page="+page+"&_limit="+pageLimit;
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setProduct(res)
        })
        .catch((err)=>{
            setError(true);
            setProduct([]);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[page]);
   

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


    return loading ?(<h1>Loading.....</h1>):error?(<h1>Something Went Wrong.......</h1>):(
        <div className="container">
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
                <label>Image<br/> 
                    <input
                        type="text"
                        name="image"
                        value={inputValue.image}
                        onChange={onInputChange}
                    />
                </label><br/>
                <button className="add-button" onClick={addProduct}> Add Product</button>
            </div>
            <div className="product-display">
                {
                    product.map((item)=>
                        <DisplayProduct {...item} key={item.id}/>
                    )
                }
                    

            </div>
            <button className="prv-button" onClick={()=>setPage(page-1)} disabled={page===1}>Previous</button> &nbsp;<span>Page No. {page}</span> &nbsp;
            <button className="next-button" onClick={()=>setPage(page+1)} disabled={product && product.length <pageLimit}>Next</button>
            
        </div>
    )
}

export default ProductForm;