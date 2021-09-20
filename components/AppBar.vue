<template>
  <v-app-bar flat app color="white" height="64">
    <v-avatar color="primary">
      <v-icon dark> mdi-account-circle </v-icon>
    </v-avatar>
  </v-app-bar>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppBar',
  setup() {}
})
</script>
