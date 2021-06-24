<template>
  <v-btn @click.prevent="clickAction" color="primary" class="font-weight-bold text-body-1" depressed large>
    {{ btnText }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppBtn',
  props: {
    btnText: {
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
