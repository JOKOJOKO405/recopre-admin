<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col>表示テスト{{ test }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const test = ref('test')

    return { test }
  },
})
</script>
