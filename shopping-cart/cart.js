
function addItem(cart, item, quantity) { // Adds an item to the cart
    let newItem = {'item': item, 'quantity': quantity};
    if (quantity > 0) cart.push(newItem);
    else (console.log('Error, must select at least one item.'));
    return cart;
}

function removeItem(cart, item) { // Removes an item from the cart
    let index;
    for (index = 0; index < cart.length; index++) {
        if (cart[index]['item'] === item) {
            break;
        }

        if (index === cart.length - 1) {
            console.log("Error, no such item in cart.");
        }
    }
    cart.splice(index, 1);
    return cart;
}

function getTotalItems(cart) { // Returns the total number of items in the cart
    let totalItems = 0;
    for (object in cart) {
        totalItems += cart[object].quantity;
    }
    return totalItems;
}

module.exports = { addItem, removeItem, getTotalItems };