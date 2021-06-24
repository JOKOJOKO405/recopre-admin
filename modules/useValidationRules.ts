import {Ref} from '@nuxtjs/composition-api'

type validateFunc = (v: string) => true | string

export default () => {
  // id
  const idRules = (): validateFunc[] => [
    (v: string) => !!v || '入力必須です',
    (v: string) => (v.length <= 255) || '255文字いないです'
  ]
  return {idRules}
}