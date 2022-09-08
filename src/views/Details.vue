<template>
  <div class="app__card details">
    <div class="app__image__holder center">
      <Image
        :source="
          String(List['avatarUrl']).includes('https')
            ? List['avatarUrl']
            : $store.state.BASEURL + List['avatarUrl']
        "
        width="100"
      />
      <h4>{{ List["fullName"] }}</h4>
      <span>{{ List?.type?.name }}</span>
    </div>
    <div class="app__desc">
      <p>
        {{ List.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Image from "../components/Base/Image.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "AddHero",
  components: {
    Image,
  },
  setup() {
    const route = useRoute();
    const List = route.params.hero;
    return { List };
  },
});
</script>
