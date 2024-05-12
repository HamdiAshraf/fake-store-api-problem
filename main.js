
let findPriceById = async (id) => {
    let response = await fetch('https://fakestoreapi.com/products/');
    let products = await response.json();

    let product = await products.find(product => product.id === id);
    return product.price;

}


let calcPriceByQuantityForSpecificId = (id, quantity) => {
    return new Promise((resolve, reject) => {
        findPriceById(id).then(price => {
            let totalPrice = price * quantity;
            resolve(totalPrice);
        })
            .catch(error => {
                reject(error);
            });
    })
}
async function calculateTotalPrice() {

    let totalPriceProduct1 = await calcPriceByQuantityForSpecificId(1, 3);
    let totalPriceProduct4 = await calcPriceByQuantityForSpecificId(4, 4);
    let totalPriceProduct3 = await calcPriceByQuantityForSpecificId(3, 5);


    let overallTotalPrice = totalPriceProduct1 + totalPriceProduct4 + totalPriceProduct3;

    console.log('Total price: ', overallTotalPrice);
}


calculateTotalPrice();


