<template>
  <Modal @close="$emit('closeModal')">
    <template #header> Add Hero </template>
    <template #body>
      <div>
        <div class="app__image__holder">
          <Image :source="avater" width="100" v-if="isImage === true" />
        </div>
        <div class="mt__1">
          <Input label="Avater URL" type="text" @changeValue="getURL" />
          <Input label="Full name" type="text" @changeValue="getName" />
          <Select label="Type" @changeValue="getType" :List="type_List" />
          <Textarea label="Description" @changeValue="getDesc" />
        </div>
        <a class="error" v-if="error">{{ mssg }}</a>
      </div>
    </template>

    <template #footer>
      <Button
        v-if="loading == false"
        bg_color="#6aca96"
        class="w__full"
        @trigger="addHero"
        >Save</Button
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
import Input from "../Base/Input.vue";
import Select from "../Base/Select.vue";
import Textarea from "../Base/Textarea.vue";
import Button from "../Base/Button.vue";
import Validate from "@/utils/Validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AddHero",
  components: {
    Modal,
    Image,
    Input,
    Select,
    Textarea,
    Button,
    Loader,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    var avater = ref("");
    var type_List = ref({});
    var mssg = ref("");

    var error = ref(false);
    var loading = ref(false);
    var isImage = ref(false);

    var fullname: string;
    var type: string;
    var desc: string;

    const getURL = (event: string) => {
      avater.value = event;

      if (Validate(avater.value).isImage() === true) {
        isImage.value = true;
      }
    };
    const getName = (event: string) => {
      fullname = event;
    };
    const getType = (event: string) => {
      type = event;
    };
    const getDesc = (event: string) => {
      desc = event;
    };
    const addHero = async () => {
      if (
        !Validate(avater.value).empty() ||
        !Validate(fullname).empty() ||
        !Validate(type).empty() ||
        !Validate(desc).empty()
      ) {
        error.value = true;
        mssg.value = "Please Fill all Field";
      } else {
        loading.value = true;
        try {
          try {
            const res = await store?.getters?.API?.ADD_HERO({
              fullName: fullname,
              typeId: type,
              avatarUrl: avater.value,
              description: desc,
            });
            if (res.message) {
              loading.value = false;
              error.value = true;
              mssg.value = res.response.data.message[0];
            } else {
              router.go(0);
            }
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
    const Get_Type = async () => {
      try {
        const response = await store?.getters?.API?.GET_TYPE();
        type_List.value = response;
      } catch (e) {
        console.log(e);
      }
    };
    Get_Type();

    return {
      getURL,
      getName,
      getType,
      getDesc,
      addHero,
      avater,
      isImage,
      type_List,
      error,
      mssg,
      loading,
    };
  },
});
</script>
