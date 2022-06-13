import React from "react";

const DisplayProduct = (prop)=>{
  
let item=prop;
    return (
        <div className="item">
          <img src={item.image}/>
          <h4>{item.title} &nbsp; {item.category}</h4>
          <div>
            <span>Gender: {item.gender}</span> &nbsp;
            <span>Price: &#8377;{item.price}</span>
          </div>
        </div>
    )
}



export default DisplayProduct;