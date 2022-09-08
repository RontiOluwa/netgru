<template>
  <div class="app__form__control">
    <label>{{ label }}</label>
    <div>
      <input :type="type" @keyup="$emit('changeValue', $event.target.value)" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
  },
};
</script>
