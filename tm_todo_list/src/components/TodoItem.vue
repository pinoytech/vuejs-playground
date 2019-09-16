<template>
  <div class="todo-item" :class="{ 'is-complete':todo.completed }">
    <p>
      <input type="checkbox" @change="updateTask" :checked="todo.completed">
      {{ todo.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    updateTask() {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px solid dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #fF0000;
    color: #FFFFFF;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>