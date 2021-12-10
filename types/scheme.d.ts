declare interface Seal {
  id: number
  name: string
  kana: string
  src: string
  rate: number
  description: string
  created_at: string
}

declare interface Timer {
  min: number
  sec: number
}

declare interface Todos {
  id: number
  name: string
  timezone: 'morning' | 'afternoon' | 'evening'
  created_at: string
}
declare interface DivideTodos {
  morning: Todos[]
  afternoon: Todos[]
  evening: Todos[]
}
declare interface Grades {
  id: number
  grades: string
  created_at: string
}
