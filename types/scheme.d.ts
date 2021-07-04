declare interface Timetable {
  day: string
  subjects: TimetableInput[]
}
declare interface TimetableInput {
  id: number
  text: string | null
}
declare interface FileEvent {
  lastModified: number
  lastModifiedDate: any
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
declare interface PokemonDatas {
  id?: number
  name: string
  src: string
  rate: number
}

declare interface EventItems {
  id?: number
  day: Date
  items: TimetableInput[]
  limit: boolean
  limitDay?: Date | null
}

declare interface CalendarDay {
  date: string
  day: number
  future: boolean
  hasDay: boolean
  hours: number
  minute: number
  month: number
  past: boolean
  present: boolean
  time: string
  weekday: number
  year: number
}