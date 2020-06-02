import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
  },
  mutations: {
    initStore(state) {
      const data = localStorage.getItem("vue-todo");
      if (!data) return;
      this.replaceState(Object.assign(state, JSON.parse(data)));
    },
    addTodo(state, newTodo) {
      state.todos = [
        ...state.todos,
        { id: uuid(), task: newTodo, done: false },
      ];
    },
    delTodo(state, id) {
      state.todos = state.todos.filter(
        (todo) => todo.id.toString() !== id.toString()
      );
    },
    toggleTodo(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id.toString() === id.toString()
          ? { ...todo, done: !todo.done }
          : todo
      );
    },
  },
});

store.subscribe((mutations, state) =>
  localStorage.setItem("vue-todo", JSON.stringify(state))
);
