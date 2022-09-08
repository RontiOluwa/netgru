<template>
  <div class="app__form__control">
    <label>{{ label }}</label>
    <div>
      <textarea @change="$emit('changeValue', $event.target.value)"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "Textarea",
  props: {
    label: { type: String, required: true },
  },
};
</script>
