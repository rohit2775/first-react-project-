
import Product from "./Product"



function ProductTab (){
   
  let features = [<li>"hello"</li>,<li>"rohit"</li>,<li>"bhai"</li>] ;
  
  return (
    <>
     <Product title="phone" price={7678687} features={features} />
    <Product title="laptop" price={35433} />
     <Product title="tablets" price={2333} />
    </>
  )
}

export default ProductTab