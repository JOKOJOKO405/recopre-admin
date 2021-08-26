<template>
  <v-card class="pa-3" height="100%" @click="$emit('click')">
    <h4 class="text-center">{{ seal.name }}</h4>
    <v-img :src="seal.src" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    seal: {
      type: Object
    }
  },
  setup() {}
})
</script>
