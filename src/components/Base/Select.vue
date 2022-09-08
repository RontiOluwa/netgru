<template>
  <div class="app__form__control">
    <label>{{ label }}</label>
    <div>
      <select @change="$emit('changeValue', $event.target.value)">
        <option selected disabled>Select Type</option>
        <option v-for="item in List" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    label: { type: String, required: true },
    List: { type: Object, required: true },
  },
};
</script>
