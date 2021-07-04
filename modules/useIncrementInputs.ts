import {ref} from '@nuxtjs/composition-api'

export const useIncrementInputs = () =>{

  const textFields = ref<TimetableInput[]>([
    {
      id: 0,
      text: ''
    }
  ])
  const add = () => {
    const newId = textFields.value.slice(-1)[0].id + 1
    textFields.value.push({ id: newId, text: '' })
  }
  const remove = (index: number) => {
    if (textFields.value.length < 2) return
    textFields.value.splice(index, 1)
  }
  return {
    textFields,
    add,
    remove,
  }
}