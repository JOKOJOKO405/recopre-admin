declare interface Seal {
  id: number
  name: string
  kana: string
  src: string
  rate: number
  description: string
}

declare interface Timer {
  min: number
  sec: number
}

declare interface Todos {
  id: number
  name: string
  created_at: string
}
declare interface Grades {
  id: number
  grades: string
  created_at: string
}
