import products from "./api/products.json";
import {getCartProductFromLS} from "./getCartProduct";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    console.log(curProd.name);
    
}) 