{/* <!-- Calling the components --> */}
import React,  {useState} from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  {/* <!-- Creating a useState hook --> */}
  let [count, setCount]= useState(0) 
  {/* <!-- Creating JSON  --> */}
  let product = [
    {
      title: "Fancy Product",
      price: "$40.00 - $80.00",
      sale: "",
      isSale:false,
      review:"",
      isReview:true
      
    },
    {
      title: "Special Item",
      price: "$20.00",
      discountPrice:"$18.00",
      sale:"Sale",
      isSale:true,
      review:"",
      isReview:false
      
    },
    {
      title: "Sale Item",
      price: "$50.00",
      discountPrice:"$25.00",
      sale:"Sale",
      isSale:true,
      review:"",
      isReview:true
    },
    {
      title: "Popular Item",
      price: "$40.00",
      sale: "",
      isSale:false,
      review:"",
      isReview:false
    },
    {
      title: "Sale Item",
      price: "$50.00",
      discountPrice:"$25.00",
      sale:"Sale",
      isSale:true,
      review:"",
      isReview:true
    },
    {
      title: "Fancy Product",
      price: "$120.00 - $280.00",
      sale: "",
      isSale:false,
      review:"",
      isReview:true
      
    },
    {
      title: "Special Item",
      price: "$20.00",
      discountPrice:"$18.00",
      sale:"Sale",
      isSale:true,
      review:"",
      isReview:false
      
    },
    {
      title: "Popular Item",
      price: "$40.00",
      sale: "",
      isSale:false,
      review:"",
      isReview:false
    },
  ]
  return <>
  {/* <!-- Calling the TopBar--> */}
 <TopBar count={count} setCount={setCount}/>  
 {/* <!-- Calling the Header--> */}
 <Header/>
 <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* <!-- To return JSON --> */}
                {product.map((e,i)=>{
                  return <Card  product ={e} key={i} count={count} setCount={setCount}/>
                  
                })} 
                
                </div>
                </div>
                </section>
    {/* <!-- Calling the Footer--> */}
  <Footer/> 
  </>
}


export default App