var app = new Vue({
  el: '#app',
  data: {
    product: 'Shoe',
    brand: 'Nike',
    selectedVariant: 0,
    inStock: false,
    inventory: 0,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "red",
        variantImage: 'shoe-red.jpg',
        variantQuantity: 11
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: 'shoe-blue.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    },
    removeFromCart: function() {
      this.cart = 0;
    }
  },
  computed: {
    title: function() {
      return this.brand + ' ' + this.product
    },
    image: function() {
      return this.variants[this.selectedVariant].variantImage
    }
  }
})
