import React, { useState } from "react"

function Card({count,setCount,product}) {
    let [swap, setSwap] = useState(true)
    // let count = 0
  return <div className="col mb-5">
        {/* <div>Total Order = {count}</div>  */}
      <div className="card h-100">
        {product.isSale&&(<div
          className="badge bg-dark text-white position-absolute"
          style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>)}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."/>
        <div className="card-body p-4">           
          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
 <div className={product.isReview?"":"bi-star-fill"}></div>
 <div className={product.isReview?"":"bi-star-fill"}></div>
   <div className={product.isReview?"":"bi-star-fill"}></div>
    <div className={product.isReview?"":"bi-star-fill"}></div>
   <div className={product.isReview?"":"bi-star-fill"}></div>
    </div>
  
 {product.title === "Special Item" || product.title === "Sale Item" ? (
  <>
    <span className="text-muted text-decoration-line-through">{product.price}</span>
    {product.discountPrice}
  </>
) :  (product.price)}
   
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
           {
           swap?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
             setCount(count+1)
             setSwap(false) 
             
                   }} >
            Add to cart
              </button>:
              <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCount(count-1)
                setSwap(true)
                      }} >
               Remove from cart
                 </button> 
              }
      </div>
        </div>
      </div>
    </div>
  
}
export default Card
