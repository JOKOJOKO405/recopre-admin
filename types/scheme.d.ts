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

declare interface Child {
  name: string
  grade: number
  icon: number
  todos: Todos[] | null
  items: any[] //TODO
  created_at: string
}

declare type Timezone = 'morning' | 'afternoon' | 'evening'
declare interface Todos {
  id: number
  name: string
  timezone: Timezone
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

declare interface Headers {
  uid: string
  client: string
  'access-token': string
}
