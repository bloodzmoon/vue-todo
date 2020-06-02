<template>
  <input
    ref="inputRef"
    class="input"
    :placeholder="placeholder"
    :value="value"
    @input="onChange($event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["placeholder", "value", "autofocus"],
  methods: {
    onChange(value) {
      this.$emit("input", value);
    },
  },
  created() {
    if (!this.autofocus) return;
    this.$nextTick(() => {
      if (!this.$refs.inputRef) return;
      this.$refs.inputRef.focus();
    });
  },
};
</script>

<style>
.input {
  font-family: inherit;
  padding: 10px;
  border: none;
  border-radius: 0;
  background: white;

  min-width: 300px;
  font-size: 16px;
  transition: 0.2s;
}

.input:focus,
.input:hover {
  outline: none;
  background: #f7f7f7;
}

.input::placeholder {
  color: #a4a4a4;
}
</style>
