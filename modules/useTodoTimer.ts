import { ref } from '@nuxtjs/composition-api'

export const useTodoTimer = () => {
  const time = ref<number | null>(null)
  const setTime = [...Array(20).keys()].map(i => ++i)

  const convertTime = (setTime: number) => {
    console.debug('set', setTime)
    const convertSec = setTime * 60
    const min = Math.floor(convertSec / 60)
    const sec = convertSec % 60
    return {
      min,
      sec
    }
  }
  return { setTime, time, convertTime }
}
