<template>
  <main>
    <h1>Todo List</h1>
    <ul>
      <li v-for="(item, index) in state.todos" :key="index">{{ item }}</li>
    </ul>
    <input v-model="state.item" />
    <button @click="addItem">Add Todo Item</button>
  </main>
</template>

<script>
import { reactive } from "@vue/composition-api";

export default {
  setup() {
    let state = reactive({
      item: "",
      todos: []
    });
    const addItem = () => {
      state.todos.unshift(state.item);
    };
    return {
      state,
      addItem
    };
  }
};
</script>

<style></style>
