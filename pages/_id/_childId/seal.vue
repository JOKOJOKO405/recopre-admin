<template>
  <v-container>
    <v-row>
      <v-col v-for="(seal, index) in seals" :key="index" cols="2" sm="3">
        <!-- TODO: カードをコンポーネント化 -->
        <v-card class="pa-3" height="100%">
          <h4 class="text-center">{{ seal.name }}</h4>
          <v-img :src="seal.src" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useSealCard } from '../../../modules/useSealCard'
export default defineComponent({
  setup() {
    const { seals } = useSealCard()
    return { seals }
  }
})
</script>
