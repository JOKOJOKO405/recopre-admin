import {reactive} from '@nuxtjs/composition-api'

interface Time {
  start: {
    h: number | null
    m: number | null
  },
  end: {
    h: number | null
    m: number | null
  }
}

export const useTimePicker = ()=>{

  const time = reactive<Time>({
    start: {
      h: null,
      m: null
    },
    end: {
      h: null,
      m: null
    }
  })

  const changeStartHours = (event: number)=>{
    time.start.h = event
  }
  const changeStartMinute = (event: number)=>{
    time.start.m = event
  }
  const changeEndHours = (event: number)=>{
    time.end.h = event
  }
  const changeEndMinute = (event: number)=>{
    time.end.m = event
  }
  return {
    time,
    changeStartHours,
    changeStartMinute,
    changeEndHours,
    changeEndMinute
  }
}