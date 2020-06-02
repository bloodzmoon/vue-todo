<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
.button {
  font-family: inherit;
  letter-spacing: 0.6px;
  width: 100px;
  height: 40px;
  color: #fff;
  background: #333;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: 0.2s;
}
.button:hover {
  background: #41b883;
}
.button:focus {
  outline: none;
}
</style>
