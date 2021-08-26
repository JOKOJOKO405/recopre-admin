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
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useSealCard } from '../../../modules/useSealCard'
export default defineComponent({
  setup() {
    const { seals, pokemon } = useSealCard()
    const isOpenSealDialog = ref(false)

    const showSealDetail = (index: number) => {
      isOpenSealDialog.value = true
      pokemon.value = seals[index]
    }
    const closeDialog = () => {
      isOpenSealDialog.value = false
    }
    return { seals, showSealDetail, isOpenSealDialog, closeDialog, pokemon }
  }
})
</script>
