<template>
  <v-container class="pa-12 my-auto">
    <h1 class="text-center mb-10">
      <i class="mdi mdi-clock-time-four-outline primary--text" />
      あと{{ time }}
    </h1>
    <v-form class="todo-form-bottom">
      <div
        v-for="(list, index) in lists"
        :key="index"
        class="todo-form py-6 d-flex justify-space-between align-center"
      >
        <p class="ma-0">{{ list.text }}</p>
        <p class="ma-0">
          <v-switch inset v-model="list.value" />
        </p>
      </div>
      <AppBtn
        btn-text="おわった！"
        class="d-block mx-auto mt-10"
        @click="finishTodos"
      />
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const lists = reactive([
      { text: 'きがえ', value: false },
      { text: 'はみがき', value: false },
      { text: '給食セット', value: false }
    ])
    const time = '10分32秒'
    const finishTodos = () => {
      // TODO: バリデーションチェック
    }
    return { lists, time, finishTodos }
  }
})
</script>

<style scoped>
.todo-form {
  border-bottom: 1px solid #ccc;
}
.todo-form-bottom {
  border-top: 1px solid #ccc;
}
</style>
