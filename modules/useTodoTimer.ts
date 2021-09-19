import { ref } from '@nuxtjs/composition-api'

export const useTodoTimer = () => {
  const time = ref<number | null>(null)
  const isDisabledSwitch = ref(false)
  const setTime = [...Array(20).keys()].map(i => ++i)

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60) % 60
    const sec = Math.floor(time % 60)
    const putZero = (num: number) => ('00' + num).slice(-2)
    return `${min}分${putZero(sec)}秒`
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

  const getGreeting = () => {
    const hours = new Date().getHours()
    if (hours >= 6 && hours <= 8) {
      return 'おはようございます🍞\n今日もがんばりましょう😊'
    } else if (hours >= 13 && hours <= 18) {
      return 'おかえりなさい🍰\n終わってからあそぼう🎮'
    } else {
      return 'こんばんは🌙\nねる前にチェックしよう✅'
    }
  }

  return {
    isDisabledSwitch,
    setTime,
    time,
    formatTime,
    startCountDown,
    stopCountDown,
    getGreeting
  }
}
