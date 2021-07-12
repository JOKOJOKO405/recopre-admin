import { Ref } from '@nuxtjs/composition-api'

type validateFunc = (v: string) => true | string

export default () => {
  // id
  const textRules = (): validateFunc[] => [
    (v: string) => !!v || '入力必須です',
    (v: string) => v.length <= 255 || '255文字以内で入力してください'
  ]
  // password
  const passwordRules = (): validateFunc[] => [
    (v: string) => !!v || '入力必須です',
    (v: string) => v.length <= 255 || '255文字いないです'
  ]

  const selectRules = (): validateFunc[] => [
    v => !!v || '曜日を選択してください'
  ]

  const datePickerRules = (): validateFunc[] => [
    v => !!v || '日付を選択してください'
  ]
  return { textRules, passwordRules, selectRules, datePickerRules }
}
