import { ref } from '@nuxtjs/composition-api'

export const useSealCard = () => {
  const seals = [
    {
      name: 'ギャラドス',
      src: require('@/assets/images/pokemons/00001_gyarados.png')
    },
    {
      name: 'ゴローン',
      src: require('@/assets/images/pokemons/00002_goron.png')
    },
    {
      name: 'ニドラン♀',
      src: require('@/assets/images/pokemons/00003_nidranF.png')
    },
    {
      name: 'サンダース',
      src: require('@/assets/images/pokemons/00004_thunders.png')
    },
    {
      name: 'ニャース ガラルのすがた',
      src: require('@/assets/images/pokemons/00005_nyas_gar.png')
    },
    {
      name: 'ゴースト',
      src: require('@/assets/images/pokemons/00006_gost.png')
    },
    {
      name: 'メガカメックス',
      src: require('@/assets/images/pokemons/00007_kamex_mega.png')
    },
    {
      name: 'ジュゴン',
      src: require('@/assets/images/pokemons/00008_jugon.png')
    },
    {
      name: 'ニャース',
      src: require('@/assets/images/pokemons/00009_nyas.png')
    },
    {
      name: 'カモネギ',
      src: require('@/assets/images/pokemons/00010_kamonegi.png')
    }
  ]

  const getPokemonSeal = () => {
    return seals[Math.floor(Math.random() * seals.length)]
  }

  const praizeSeal = ref<PokemonDatas | null>(null)

  // TODO: 名前・id・拾った日・リンク
  const pokemon = ref<PokemonDatas | null>(null)
  return { seals, pokemon, praizeSeal, getPokemonSeal }
}
