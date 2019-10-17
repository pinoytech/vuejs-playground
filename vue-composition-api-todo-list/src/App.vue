<template>
  <main>
    <h1>Todo List</h1>
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
    </ul>
    <input v-model="todo" />
    <button @click="addTodo">Add Todo Item</button>
  </main>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      todo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.unshift(this.todo);
      this.todo = "";
    }
  }
};
</script>

<style></style>
