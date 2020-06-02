<template>
  <div class="todo-page">
    <form v-on:submit.prevent="handleSubmit">
      <Input
        placeholder="Type something to add..."
        v-model="newTodo"
        :autofocus="true"
      />
      <Button>ADD</Button>
    </form>
    <TodoList />
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Todo",
  components: {
    Input,
    Button,
    TodoList,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.newTodo) return;
      this.$store.commit("addTodo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
.todo-page {
  width: 100%;
  display: flex;
  padding-top: 160px;
  flex-direction: column;
  align-items: center;
}
</style>
