import { ref } from '@nuxtjs/composition-api'

export const useTodoTimer = () => {
  const time = ref<number | null>(null)
  const setTime = [...Array(20).keys()].map(i => ++i)
  return { setTime, time }
}
