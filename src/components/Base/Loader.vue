<template>
  <div class="loader">
    <Image source="svg/loader.svg" :width="width" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Image from "./Image.vue";

export default defineComponent({
  name: "Loader",
  components: { Image },
  props: {
    width: { type: String, required: true },
  },
});
</script>
