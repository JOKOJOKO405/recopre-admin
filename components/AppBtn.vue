<template>
  <v-btn @click.prevent="clickAction" color="primary" class="font-weight-bold text-body-1" elevation="0" large>
    {{ btnText }}
  </v-btn>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppBtn',
  props: {
    btnText: {
      type: String,
      required: true
    },
    clickAction: {
      type: () => {},
      required: true
    }
  }
})
</script>
