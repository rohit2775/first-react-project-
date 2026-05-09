
import "./Product.css"


function Product ({title , price , features }){
  let styles = { backgroundColor : price<3000? "blue": ""}
  return(
    <div className="Product" style ={styles}>

      
      <h3>  {title}  </h3>
      <h3> {price} </h3>
      {price <3000 ? <p> discount available</p> : ""}
      

    </div>
  )
}

export default Product