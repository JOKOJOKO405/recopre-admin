<template>
  <v-container>
    <h1 class="text-center mb-10">もちもの</h1>
    <v-tabs v-model="tab" centered grow>
      <v-tab v-for="tab in tabs" :key="tab.id" class="font-weight-bold">
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <v-tab-items v-model="tab">
      <v-tab-item></v-tab-item>
    </v-tab-items>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

const tabs = [
  { id: 0, title: '終わってない' },
  { id: 1, title: '終わった' }
]
// TODO: バックからとってくる
const lists = [
  { id: 0, item: 'えんぴつ', due: '2020-09-12', done: false },
  { id: 1, item: 'けしごむ', due: '2020-09-12', done: true },
  { id: 2, item: 'ねんど', due: '2020-09-12', done: false },
  { id: 3, item: 'しゅうきん', due: '2020-09-12', done: true },
  { id: 4, item: 'ぐんて', due: '2020-09-12', done: true },
  { id: 5, item: 'スコップ', due: '2020-09-12', done: false }
]

export default defineComponent({
  setup() {
    const tab = ref<boolean | null>(null)
    /**
     * init
     */

    return { tabs, tab, lists }
  }
})
</script>

<style scoped></style>
