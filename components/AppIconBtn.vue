<template>
  <v-btn @click.prevent="clickAction" fab depressed color="primary">
    <v-icon>{{ mdiIconName }}</v-icon>
  </v-btn>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppIconBtn',
  props: {
    mdiIconName: {
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
