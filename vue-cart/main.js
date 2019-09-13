var app = new Vue({
  el: '#app',
  data: {
    product: 'Shoe',
    image: 'shoe-red.jpg',
    inStock: false,
    inventory: 11,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "red"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    cart: 0
  }
})
