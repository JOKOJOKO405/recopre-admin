<template>
  <div class="d-flex align-center justify-center" style="height: 100%">
    <v-container id="page-top" class="text-center">
      <h1 class="mb-8" style="white-space: break-spaces">
        <template v-if="today.isHoliday"> 今日はお休みです </template>
        <template v-else>
          {{ greetings }}
        </template>
      </h1>
      <h2
        class="
          show-date
          d-inline-block
          secondary
          primary--text
          py-3
          px-6
          rounded-pill
        "
      >
        {{ today.month }}月{{ today.date }}日（{{ today.day }}）
      </h2>
      <div v-if="!today.isHoliday" class="notice-list my-10">
        <!-- TODO: やること取得して表示 -->
        <h3 class="font-weight-bold mb-2">今日は何かがあります</h3>
        <h3 class="font-weight-bold mb-2">今日は何かがあります</h3>
      </div>
      <v-form
        v-if="!today.isHoliday"
        ref="form"
        v-model="isValid"
        class="ma-auto"
        style="width: 60%"
      >
        <div class="d-flex justify-center">
          <p class="mr-5 pt-4">もくひょう</p>
          <v-select
            v-model="time"
            outlined
            class="mr-5"
            :items="setTime"
            :rules="rules.time"
          />
          <p class="mr-5 pt-4">分</p>
        </div>
        <AppBtn btn-text="スタート！" @click="startPreparation" />
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useRouter,
  useRoute,
  useStore,
  computed
} from '@nuxtjs/composition-api'
import { useTodoTimer } from '~/modules/useTodoTimer'
import useValidationRules from '~/modules/useValidationRules'

export default defineComponent({
  setup() {
    const { setTime, time, getGreeting, getDate } = useTodoTimer()
    const { selectTimeRules } = useValidationRules()
    const rules = {
      time: selectTimeRules()
    }
    const isValid = ref(false)
    const form = ref<HTMLFormElement | null>(null)
    const router = useRouter()
    const route = useRoute()
    const parentId = route.value.params.id
    const childId = route.value.params.childId
    const store = useStore()

    const startPreparation = () => {
      form.value!.validate()
      if (!isValid.value) return
      store.dispatch('timer/setTime', time)
      router.push(`/${parentId}/${childId}/todo`)
    }

    const greetings = computed(() => getGreeting())
    const today = computed(() => getDate())

    return {
      time,
      setTime,
      startPreparation,
      rules,
      form,
      isValid,
      greetings,
      today
    }
  }
})
</script>

<style scoped></style>
