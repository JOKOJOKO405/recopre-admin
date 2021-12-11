<template>
  <v-btn
    @click.prevent="$emit('click')"
    :outlined="isOutlined"
    :color="isOutlined ? 'white' : 'primary'"
    class="font-weight-bold text-body-1"
    :class="isOutlined ? 'primary--text' : 'white--text'"
    depressed
    large
    :block="block"
    :disabled="disabled"
  >
    {{ btnText }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'AppBtn',
  props: {
    btnText: {
      type: String,
      required: true
    },
    isOutlined: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
