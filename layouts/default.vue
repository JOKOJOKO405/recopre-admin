<template>
  <v-app>
    <AppBar />
    <v-main style="background: #f3f8ff">
      <nuxt />
    </v-main>
    <BottomDrawer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({})
</script>
