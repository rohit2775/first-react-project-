
import "./Product.css"

function Product ({title , price , features }){
  
  return(
    <div className="Product">
      <h3>  {title} </h3>
      <h3> {price} </h3>
      <h3>  {features}</h3>
    </div>
  )
}

export default Product