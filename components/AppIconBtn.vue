<template>
  <v-btn @click.stop.prevent="clickAction" fab depressed color="primary">
    <v-icon>{{ mdiIconName }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppIconBtn',
  props: {
    mdiIconName: {
      type: String,
      required: true
    },
    clickAction: {
      type: Function as PropType<() => Promise<any>>,
      default: () => Promise.resolve()
    }
  }
})
</script>
