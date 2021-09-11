import { ref } from '@nuxtjs/composition-api'

export const useTodoTimer = () => {
  const time = ref<number | null>(null)
  const setTime = [...Array(20).keys()].map(i => ++i)

  const formatTime = (time: number) => {
    const convertSec = time * 60
    const min = Math.floor(convertSec / 60)
    const sec = convertSec % 60
    const putZero = (num: number) => ('00' + num).slice(-2)
    return `${putZero(min)}分${putZero(sec)}秒`
  }

  let timerIntervalId: NodeJS.Timer
  const startCountDown = () => {
    timerIntervalId = setInterval(() => {
      time.value!--
      if (time.value! <= 0) {
        clearInterval(timerIntervalId)
      }
    }, 1000)
  }

  const stopCountDown = () => {
    clearInterval(timerIntervalId)
  }

  return { setTime, time, formatTime, startCountDown, stopCountDown }
}
