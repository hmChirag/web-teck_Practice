import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
    let oldPrices=["10,000","12,000","30,000","21,000"];
    let newPrices=["9,000","3,000","5,000","2000"]; 
    let description=["8000 dpi","intuitive surface","designed for ipad pro","wireless"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;