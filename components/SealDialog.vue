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
        <p class="mb-1">今回のシールは</p>
        <p>
          <span class="text-h4 accent--text font-weight-bold">
            {{ pokemon.name }}
          </span>
          だよ
        </p>
        <div class="pokemon-img">
          <img :src="pokemon.src" :alt="pokemon.name" />
        </div>
      </div>
      <div class="d-flex">
        <v-spacer />
        <AppBtn @click="$emit('close')" btn-text="とじる" />
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

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
  setup() {}
})
</script>
