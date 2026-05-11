
import "./Product.css"
import Price from "./Price"

function Product ({title}){
  let oldPrice=["1233","34332","23234","23443"]
  let newPrice=["99999","9999","99999","99999"]
  return(
    <div className="Product" >

         <p> {title} </p>
         <p> discription </p>
          <Price />
      

      

    </div>
  )
}

export default Product