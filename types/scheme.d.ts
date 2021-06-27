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