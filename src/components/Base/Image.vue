<template>
  <img :src="source" :width="width" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Image",
  props: {
    source: { type: String, required: true },
    width: { type: String, required: true },
  },
});
</script>
