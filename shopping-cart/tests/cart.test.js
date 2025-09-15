//testing
const cartFunctions = require('../cart');

let cart = [
    { item: 'apple', quantity: 3 },
    { item: 'ice cream', quantity: 1}
];




describe('additem function: ', function() {

    test('adds a mango to cart', () => { 
        expect(cartFunctions.addItem(cart, 'mango', 1)).toEqual([{ item: 'apple', quantity: 3 }, { item: 'ice cream', quantity: 1 }, { item: 'mango', quantity: 1 }]);
    });

    test('adds an item with a negative quantity', () => {
        expect(cartFunctions.addItem(cart, 'yoghurt', -1)).toEqual([{ item: 'apple', quantity: 3 }, { item: 'ice cream', quantity: 1 }, { item: 'mango', quantity: 1 }]);
    });

    test('adds an item with a quantity of 0', () => {
        expect(cartFunctions.addItem(cart, 'yoghurt', 0)).toEqual([{ item: 'apple', quantity: 3 }, { item: 'ice cream', quantity: 1 }, { item: 'mango', quantity: 1 }]);
    });
});

describe('removeItem function: ', function() {
    test('removes an existing item from the cart', () => {
        expect(cartFunctions.removeItem(cart, 'ice cream')).toEqual([{ item: 'apple', quantity: 3 }, { item: 'mango', quantity: 1 }]);
    });

    test('attempts to remove an item not in the cart', () => {
        expect(cartFunctions.removeItem(cart, 'chips')).toEqual([{ item: 'apple', quantity: 3 }, { item: 'mango', quantity: 1 }]);
    });

    test('removes the last added item from the cart', () => {
        expect(cartFunctions.removeItem(cart, 'mango')).toEqual([{ item: 'apple', quantity: 3 }]);
    });

    test('removes all items from the cart', () => {
        expect(cartFunctions.removeItem(cart, 'apple')).toEqual([]);
    });
});

let newCart = [
    { item: 'apple', quantity: 3 },
    { item: 'ice cream', quantity: 1}
]

let emptyCart = [];

let largeCart = [
    { item: 'apple', quantity: 432166874},
    { item: 'ice cream', quantity: 1321354387},
    { item: 'milk', quantity: 5135437}
]

describe('getTotalItems function: ', function() {
    
    test('calculates the total number of items in the cart', () => {
        expect(cartFunctions.getTotalItems(newCart)).toEqual(4);
    });

    test('handles an empty cart', () => {
        expect(cartFunctions.getTotalItems(emptyCart)).toEqual(0);
    });

    test('handles large quantities', () => {
        expect(cartFunctions.getTotalItems(largeCart)).toEqual(1758656698);
    });
});
