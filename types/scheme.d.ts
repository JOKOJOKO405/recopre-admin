declare interface Timetable {
  day: string
  subjects: TimetableInput[]
}
declare interface TimetableInput {
  id: number
  text: string | null
}
