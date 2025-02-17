<template>
  <v-container class="pa-12 my-auto">
    <h1 class="text-center mb-10">
      <i class="mdi mdi-clock-time-four-outline primary--text" />
      あと{{ countDownTimer }}
    </h1>
    <v-form class="todo-form-bottom">
      <div
        v-for="(list, index) in lists"
        :key="index"
        class="todo-form py-6 d-flex justify-space-between align-center"
      >
        <p class="ma-0">{{ list.text }}</p>
        <p class="ma-0">
          <v-switch inset v-model="list.value" :disabled="isDisabledSwitch" />
        </p>
      </div>
      <AppBtn
        btn-text="おわった！"
        class="d-block mx-auto mt-10"
        :disabled="isDisabledFinishBtn"
        @click="finishTodos"
      />
    </v-form>
    <AppDialog
      :is-opened-dialog="isOpenedNoticeDialog"
      dialogTitle="おわってないタスクがあるよ！"
      @close="closeDialog"
      @click="closeDialog"
    >
      <span
        v-for="(task, index) in incompleteTasks"
        :key="index"
        class="font-weight-bold error--text"
      >
        {{ task }}
      </span>
      が終わってないよ！
    </AppDialog>
    <AppDialog
      v-if="praizeSeal"
      :is-opened-dialog="isOpenedSealDialog"
      dialogTitle="おつかれさま！"
      @close="closeDialog"
      @click="closeDialog"
    >
      <p class="text-center mb-1">今回のシールは…</p>
      <p class="text-center mb-0">
        <span class="font-weight-bold error--text d-block text-h5">
          {{ praizeSeal.name }}
        </span>
        <span class="error--text">{{ praizeSeal.kana }}</span>
        <br />
      </p>
      <v-img
        :src="require(`@/assets/images/seals/${praizeSeal.src}.jpg`)"
        :alt="praizeSeal.name"
      />
      <p class="mt-4">{{ praizeSeal.description }}</p>
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
  computed,
  onUnmounted
} from '@nuxtjs/composition-api'
import { useTodoTimer } from '~/modules/useTodoTimer'
import { useSealCard } from '~/modules/useSealCard'
import { getAllSeals } from '~/modules/API/queries'

export default defineComponent({
  setup() {
    // TODO: バックからとってくるまたはprops
    const lists = reactive([
      { text: 'きがえ', value: false },
      { text: 'はみがき', value: false },
      { text: '給食セット', value: false }
    ])
    const store = useStore()
    // シール
    const seals = ref<Seal[] | null>([])

    const isOpenedNoticeDialog = ref(false)
    const isOpenedSealDialog = ref(false)
    const isDisabledFinishBtn = ref(false)
    const incompleteTasks = ref<String[]>([])

    const closeDialog = () => {
      isOpenedSealDialog.value = false
      isOpenedNoticeDialog.value = false
      incompleteTasks.value = []
    }

    const { getSeal, praizeSeal } = useSealCard()
    const finishTodos = () => {
      const incompletes = lists.filter(list => !list.value)
      if (incompletes.length) {
        incompletes.forEach(incomplete =>
          incompleteTasks.value.push(incomplete.text)
        )
        isOpenedNoticeDialog.value = true
      } else {
        stopCountDown()
        isDisabledSwitch.value = true
        isDisabledFinishBtn.value = true
        isOpenedSealDialog.value = true
      }
    }

    /**
     * init
     */
    const {
      formatTime,
      time,
      startCountDown,
      stopCountDown,
      isDisabledSwitch
    } = useTodoTimer()
    const { $fetch } = useFetch(async () => {
      // TODO シール取得API
      seals.value = await getAllSeals()
      praizeSeal.value = getSeal(seals.value!)
      time.value = store.getters['timer/time'].value * 60
      startCountDown()
    })
    const countDownTimer = computed(() => {
      return formatTime(time.value!)
    })

    onUnmounted(() => {
      stopCountDown()
    })
    return {
      lists,
      finishTodos,
      isOpenedNoticeDialog,
      closeDialog,
      incompleteTasks,
      countDownTimer,
      isOpenedSealDialog,
      praizeSeal,
      isDisabledSwitch,
      isDisabledFinishBtn
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
