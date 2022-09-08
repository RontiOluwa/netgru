<template>
  <div class="app__card flex" @click="$emit('openModal', { id })">
    <div class="w__30">
      <Image
        :source="
          image.includes('https') ? image : $store?.state?.BASEURL + image
        "
        width="50"
      />
      <b>{{ name }}</b>
      <a class="none">{{ type }}</a>
    </div>
    <div class="w__30 hero__type">
      <span>{{ type }}</span>
    </div>
    <div class="w__40">
      <span class="desc">{{ desc }} </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Image from "./Image.vue";

export default defineComponent({
  name: "Card",
  components: { Image },
  props: {
    id: { type: String, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    desc: { type: String, required: true },
  },
});
</script>
