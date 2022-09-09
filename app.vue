<template>
  <div class="container">
   <NCard class="cards">
    <h1>My Todos</h1>
    <div class="add-todo">
      <input type="text" placeholder="Add a new todo..." v-model="input">
      <NButton @click="handleClick">Add</NButton>
    </div>
    <NCard class="card" v-for="todo in todos" :key="todo.id" @click="() => updateTodo(todo.id)">
      <h4 :class="todo.completed ? 'completed' : null">{{todo.item}}</h4>
      <p @click="(e) => deleteTodo(e, todo.id)">x</p>
    </NCard>
   </NCard>
  </div>
</template>


<script setup lang="ts">
  const input = ref("");
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
  const handleClick = () => {
    addTodo(input.value);
    input.value = "";
  }
</script>

<style scoped>
.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}

.cards {
  padding: 0.5rem;

}

.add-todo {
  display: flex;
  justify-content: space-between;
}

input {
  outline: none;
}

.card {
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.completed {
  color: green;
}
</style>