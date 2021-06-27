<template>
  <v-card>
    <v-card-title class="justify-center">{{ card.name }}</v-card-title>
    <v-img :src="card.src" />
    <v-card-text class="text-center">レア度：{{ card.rate }}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn icon @click.prevent="editSeal(index)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon @click.prevent="deleteSeal(index)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SealCard',
  props: {
    card: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(_, { emit }) {
    const editSeal = (index: number) => {
      emit('edit-seal', index)
    }
    const deleteSeal = (index: number) => {
      emit('delete-seal', index)
    }
    return {
      editSeal,
      deleteSeal
    }
  }
})
</script>
