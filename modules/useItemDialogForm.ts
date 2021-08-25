import { ref } from '@nuxtjs/composition-api'

export const useItemDialogForm = () => {
  const hasDeadline = ref(false)
  const isRepeated = ref(false)
  const calendar = ref(false)
  const limitedDay = ref(false)
  const repeatDay = ref(false)
  const inputDay = ref<Date | null>(null)
  const dueDay = ref<Date | null>(null)
  const repeatEnd = ref<Date | null>(null)
  const date = ref<Date | null>(null)

  const choiceDay = (event: Date) => {
    inputDay.value = event
    calendar.value = false
  }
  const choiceLimitedDay = (event: Date) => {
    dueDay.value = event
    limitedDay.value = false
  }
  const choiceRepeatDay = (event: Date) => {
    repeatEnd.value = event
    repeatDay.value = false
  }
  return {
    hasDeadline,
    isRepeated,
    calendar,
    limitedDay,
    repeatDay,
    inputDay,
    dueDay,
    repeatEnd,
    date,
    choiceDay,
    choiceLimitedDay,
    choiceRepeatDay
  }
}
