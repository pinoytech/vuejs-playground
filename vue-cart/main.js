Vue.component('product', {
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="variants[selectedVariant].variantQuantity > 10">In stock</p>
        <p v-else-if="variants[selectedVariant].variantQuantity <= 10 && variants[selectedVariant].variantQuantity > 0">Almost out of stock</p>
        <p v-else>Out of stock</p>
        <p v-if="onSale">On sale</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants"
             :key="variant.variantId"
             class="color-box"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)">
        </div>
        <button v-on:click="addToCart" :disabled="variants[selectedVariant].variantQuantity == 0" :class="{ disabledButton: variants[selectedVariant].variantQuantity < 1 }">Add to Cart</button>
        <button v-on:click="removeFromCart">Remove to Cart</button>

        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
  `,
  data: function() {
    return {
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
    }
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

var app = new Vue({
  el: '#app'
})
