<template>
  <v-container fluid>
    <v-btn icon @click="prev">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title v-if="calendar">
      {{ calendar.title }}
    </v-toolbar-title>
    <v-btn icon @click="next">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
    <v-calendar v-model="focus" @click:date="viewDay" type="month" ref="calendar" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const calendar = ref<any>(null)

    const focus = ref('')

    const prev = () => {
      console.debug(calendar.value)
      calendar.value.prev()
    }
    const next = () => {
      calendar.value.next()
    }

    onMounted(() => {
      console.debug(calendar.value)
      calendar.value.checkChange()
    })

    return {
      calendar,
      next,
      prev,
      focus
    }
  }
})
</script>
