
import "./Product.css"

function Product ({title , price , features }){
  
  return(
    <div className="Product">
      <h3>  {title} </h3>
      <h3> {price} </h3>
      {price <3000 ? <p> discount available</p> : ""}
      

    </div>
  )
}

export default Product