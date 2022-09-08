<template>
  <div class="container">
    <Button bg_color="#6aca96" class="add__hero" @trigger="toggleAddHero">
      <span class="icon"
        ><font-awesome-icon icon="fa-solid fa-plus" />Add Hero</span
      >
    </Button>

    <div v-if="Heros?.length > 0">
      <Tab />
      <div v-for="item in Heros" :key="item.id">
        <Card
          :id="item.id"
          :image="item.avatarUrl"
          :type="item.type.name"
          :name="item.fullName"
          :desc="item.description"
          @openModal="toggleDetails"
        />
      </div>
    </div>
    <Loader v-else width="150" />

    <div class="app__bottom" v-if="Heros?.length > 0">
      <Button
        bg_color="#5e99f1"
        class="load__more"
        v-if="Heros?.length != length"
        @trigger="LoadMore"
      >
        Load More
      </Button>
    </div>
    <AddHero v-show="isAddHero" @closeModal="toggleAddHero" />
    <Details
      v-if="isDetails"
      @closeModal="toggleDetails"
      :id="activeId"
      :data="singleHero"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@/components/Base/Button.vue";
import Card from "@/components/Base/Card.vue";
import Tab from "@/components/Base/Tab.vue";
import Loader from "@/components/Base/Loader.vue";
import AddHero from "@/components/Modal/AddHero.vue";
import Details from "@/components/Modal/Details.vue";
import ID from "@/types/ID";

import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    Button,
    Card,
    Loader,
    Tab,
    AddHero,
    Details,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const List = route?.params?.hero;

    const length = ref(List?.length);
    var isAddHero = ref(false);
    var count = ref(5);
    var Heros = ref();
    var isDetails = ref(false);
    var activeId = ref("");
    var singleHero = ref({});

    const fetchDetails = async (id: string) => {
      try {
        const response = await store?.getters?.API?.FETCH_DETAILS(id);
        singleHero.value = response;
      } catch (e) {
        console.log(e);
      }
    };

    const LoadData = () => {
      Heros.value = List?.slice(0, count.value);
    };

    LoadData();

    const toggleAddHero = () => {
      isAddHero.value = !isAddHero.value;
    };

    const toggleDetails = ({ id }: ID) => {
      activeId.value = id;
      isDetails.value = !isDetails.value;
      if (isDetails.value === true) {
        fetchDetails(id);
      }
    };

    const LoadMore = () => {
      const newCount = count.value + 5;
      Heros.value = List.slice(0, count.value + newCount);
      count.value = newCount;
    };

    return {
      isAddHero,
      isDetails,
      length,
      Heros,
      activeId,
      singleHero,
      toggleAddHero,
      toggleDetails,
      LoadMore,
    };
  },
});
</script>
