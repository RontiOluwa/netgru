<template>
  <Transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <img
          class="close-icon"
          height="20"
          src="../../assets/svg/close-icon.svg"
          width="10"
          @click.self="$emit('close')"
        />

        <header v-if="$slots.header" class="modal-header">
          <slot name="header" />
        </header>

        <section class="modal-body">
          <slot name="body" />
        </section>

        <footer v-if="$slots.footer" class="modal-footer">
          <div>
            <slot name="footer" />
          </div>
        </footer>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "Modal",
};
</script>
