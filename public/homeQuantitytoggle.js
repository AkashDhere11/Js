export const homeQuantityToggle = (event, id, stock) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector('.productQuantity');
    console.log(productQuantity);
};

