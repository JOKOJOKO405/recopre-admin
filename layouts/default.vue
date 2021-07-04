<template>
  <v-app>
    <Header :page-title="title" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(_, { root }) {
    const title = ref('')
    const setListener = () => {
      root.$nuxt.$on('updateHeaderTitle', setTitle)
    }
    const setTitle = (text: string) => {
      return (title.value = text || '')
    }
    setListener()
    return { title }
  }
})
</script>
