<template>
  <v-container>
    <v-row>
      <v-col v-for="(seal, index) in seals" :key="index" cols="2" sm="3">
        <SealCard :seal="seal" @click="showSealDetail(index)" />
      </v-col>
    </v-row>
    <SealDialog
      :is-open-seal-dialog="isOpenSealDialog"
      :pokemon="pokemon"
      @close="closeDialog"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const isOpenSealDialog = ref(false)

    const showSealDetail = (index: number) => {
      isOpenSealDialog.value = true
    }
    const closeDialog = () => {
      isOpenSealDialog.value = false
    }
    useFetch(async () => {
      // TODO: バックからシールデータとってくるまたはprops
    })
    return { showSealDetail, isOpenSealDialog, closeDialog }
  }
})
</script>
