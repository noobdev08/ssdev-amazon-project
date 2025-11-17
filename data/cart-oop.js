function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))

            if(!this.cartItems){
                this.cartItems = [{
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: '1'
                }, {
                    productId: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
                    quantity: 3,
                    deliveryOptionId: '3'
                }]
            }
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
        },

    addToCart(productId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    matchingItem = cartItem
                }
            })

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                })
            }

            this.saveToStorage()
        },

        removeFromCart(productId) {
            let newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;

        
            this.saveToStorage();
        },

    updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    matchingItem = cartItem
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage()
        }
    };

    return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");

cart.loadFromStorage();

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);