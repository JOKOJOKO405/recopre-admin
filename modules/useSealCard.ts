import { ref } from '@nuxtjs/composition-api'

export const useSealCard = () => {
  const getSeal = (seals: Seal[]) => {
    return seals[Math.floor(Math.random() * seals.length)]
  }

  const praizeSeal = ref<Seal | null>(null)

  return { getSeal, praizeSeal }
}
