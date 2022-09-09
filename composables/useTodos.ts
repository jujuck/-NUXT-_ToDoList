const useTodos = () => {
  const { data: todos, refresh } = useAsyncData("todos",  async () => {
    const res = await $fetch("/api/todo");
    console.log(res);
    return res;
  });

  const addTodo = async(item) => {
    if(!item) return;
    await $fetch("/api/todo", { method: "post", body: { item }})
    refresh();
  }

  const updateTodo = async(id) => {
    if(!id) return;
    await $fetch(`/api/todo/${id}`, { method: "put"})
    refresh();
  }

  const deleteTodo = async(e, id) => {
    e.stopPropagation();
    if(!id) return;
    await $fetch(`/api/todo/${id}`, { method: "delete"});
    refresh();
  }

  return { todos, addTodo, updateTodo, deleteTodo}
}

export default useTodos;