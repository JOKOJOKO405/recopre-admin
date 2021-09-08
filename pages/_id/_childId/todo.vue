<template>
  <v-container class="pa-12 my-auto">
    <h1 class="text-center mb-10">
      <i class="mdi mdi-clock-time-four-outline primary--text" />
      あと{{ timer.min }}分{{ timer.sec }}
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
    <AppDialog
      :is-opened-dialog="isOpenedNoticeDialog"
      dialogTitle="おわってないタスクがあるよ！"
      @close="closeDialog"
    >
      <span v-for="(task, index) in incompleteTask" :key="index">
        {{ task }}
      </span>
      が終わってないよ！
    </AppDialog>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useStore,
  useFetch,
  ref,
  computed
} from '@nuxtjs/composition-api'
import { useTodoTimer } from '~/modules/useTodoTimer'

export default defineComponent({
  setup() {
    // TODO: バックからとってくる
    const lists = reactive([
      { text: 'きがえ', value: false },
      { text: 'はみがき', value: false },
      { text: '給食セット', value: false }
    ])
    const store = useStore()
    const { convertTime } = useTodoTimer()
    const time = store.getters['timer/time']
    const timer = convertTime(time.value)

    const isOpenedNoticeDialog = ref(false)

    const closeDialog = () => {
      isOpenedNoticeDialog.value = false
      incompleteTask.value = []
    }
    const incompleteTask = ref<String[]>([])

    const finishTodos = () => {
      const incompletes = lists.filter(list => !list.value)
      incompletes.forEach(incomplete =>
        incompleteTask.value.push(incomplete.text)
      )
      isOpenedNoticeDialog.value = true
    }
    return {
      lists,
      timer,
      finishTodos,
      isOpenedNoticeDialog,
      closeDialog,
      incompleteTask
    }
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
