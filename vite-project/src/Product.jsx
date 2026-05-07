
import "./Product.css"

function Product (props){
  console.log(props);
  return(
    <div className="Product">
      <h3>  {props.title} </h3>
      <h3> {props.price} </h3>
    </div>
  )
}

export default Product