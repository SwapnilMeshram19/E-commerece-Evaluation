const DisplayProduct = ()=>{

    try {
    
        let res=fetch("http://localhost:3001/product");
        let data=res.json();
        console.log(data)


    } catch (error) {
        console.log(error)
    }
    
    

    return (
        <div>

        </div>
    )
}

export default DisplayProduct;