<template>
  <v-dialog :value="isOpenSealDialog" width="50%">
    <div class="pa-6 white">
      <div class="d-flex mb-4">
        <v-spacer />
        <i
          class="mdi mdi-close primary--text text-h5"
          @click="$emit('close')"
        />
      </div>
      <div v-if="pokemon" class="text-center">
        <p class="text-h4 mb-1 font-weight-bold">{{ pokemon.name }}</p>
        <div class="pokemon-img">
          <img :src="pokemon.src" :alt="pokemon.name" />
        </div>
        <p class="ma-0">あつめた枚数：{{ count }}枚</p>
      </div>
      <div class="d-flex">
        <v-spacer />
        <AppBtn @click="$emit('close')" btn-text="とじる" />
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    isOpenSealDialog: {
      type: Boolean,
      default: false
    },
    pokemon: {
      type: Object
    }
  },
  setup() {
    const count = ref(12)
    return { count }
  }
})
</script>
