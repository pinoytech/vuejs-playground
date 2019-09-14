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
        <div>
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews</p>
          <ul>
            <li v-for="review in reviews">
              <p>{{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
            </li>
          </ul>
        </div>
        <product-review @add-product-review="addReview"></product-review>
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
      reviews: []
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart');
    },
    updateProduct: function(index) {
      this.selectedVariant = index;
    },
    removeFromCart: function() {
      this.cart = 0;
    },
    addReview: function(productReview) {
      this.reviews.push(productReview);
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

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <div v-if="errors.length">
        <p>Please correct the following errors:</p>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
      <p>
        <label for="name">Name</label>
        <input id="name" v-model="name" />
      </p>
      <p>
        <label for="review">Review:</label>
        <input id="review" v-model="review" />
      </p>
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      <p><input type="submit" value="Submit" /></p>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods: {
    onSubmit: function() {
      this.errors = [];
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        this.$emit('add-product-review', productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push("Name is required");
        if (!this.review) this.errors.push("Review is required");
        if (!this.rating) this.errors.push("Rating is required");
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    cart: 0
  },
  methods: {
    updateCart() {
      this.cart += 1;
    }
  }
})
