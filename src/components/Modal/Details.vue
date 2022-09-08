<template>
  <Modal @close="$emit('closeModal', { id })">
    <template #body>
      <div>
        <div class="app__image__holder center">
          <Image
            :source="
              String(data['avatarUrl']).includes('https')
                ? data['avatarUrl']
                : $store?.state?.BASEURL + data['avatarUrl']
            "
            width="100"
          />
          <h4>{{ data["fullName"] }}</h4>
          <span>{{ data?.type?.name }}</span>
        </div>
        <div class="app__desc">
          <p>
            {{ data.description }}
          </p>
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        v-if="loading == false"
        bg_color="inherit"
        class="w__full"
        @click="Delete"
        ><b class="delete"
          ><font-awesome-icon icon="fa-solid fa-trash-can" />Delete Hero</b
        ></Button
      >
      <Loader v-else :width="70" />
    </template>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "../Base/Modal.vue";
import Loader from "../Base/Loader.vue";
import Image from "../Base/Image.vue";
import Button from "../Base/Button.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AddHero",
  components: {
    Modal,
    Image,
    Loader,
    Button,
  },
  props: {
    id: { type: String, required: true },
    data: { type: Object, required: true },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    var loading = ref(false);

    const Delete = async () => {
      try {
        loading.value = true;
        await store?.getters?.API?.DELETE_HERO(props.id);
        router.go(0);
      } catch (e) {
        console.log(e);
      }
    };

    return { Delete, loading };
  },
});
</script>
