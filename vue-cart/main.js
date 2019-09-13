var app = new Vue({
  el: '#app',
  data: {
    product: 'Shoe',
    image: 'shoe-red.jpg',
    inStock: false,
    inventory: 0,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "red",
        variantImage: 'shoe-red.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 'shoe-blue.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(variantImage) {
      this.image = variantImage;
    },
    removeFromCart: function() {
      this.cart = 0;
    }
  }
})
