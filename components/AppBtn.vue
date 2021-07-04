<template>
  <v-btn
    @click.prevent="clickAction"
    :outlined="isOutlined"
    :color="isOutlined ? 'white' : 'primary'"
    class="font-weight-bold text-body-1"
    :class="isOutlined ? 'primary--text' : 'white--text'"
    depressed
    large
  >
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
    },
    isOutlined: {
      type: Boolean,
      default: false
    }
  }
})
</script>
