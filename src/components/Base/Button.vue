<template>
  <button
    class="app__btn"
    :style="{ background: bg_color }"
    @click="$emit('trigger')"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    bg_color: { type: String, required: true },
  },
});
</script>
