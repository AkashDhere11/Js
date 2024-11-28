import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();


export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElement = document.querySelector(`#card${id}`);
    // console.log(currentProdElement);

    let quantity = currentProdElement.querySelector(".productQuantity").innerText;
    let price = currentProdElement.querySelector(".productPrice").innerText;
    // console.log(quantity, price);

    price = price.replace("₹", "");


    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);


    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        console.log(updatedCart);


        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    }

    if (existingProd) {
        alert('Produuct already exist');
        return false;
    }


    price = Number(price * quantity);
    quantity = Number(quantity);
    alert('added to cart')
    // console.log(quantity, price);



    // let updateCart = {id, quantity, price};
    let updateCart = { id, quantity, price };
    arrLocalStorageProduct.push(updateCart);

    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);


};