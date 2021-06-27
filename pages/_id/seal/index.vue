<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(card, index) in cardDatas" :key="index" cols="3">
        <v-card>
          <v-card-title class="justify-center">{{ card.name }}</v-card-title>
          <v-img :src="card.src" />
          <v-card-text class="text-center">レア度：{{ card.rate }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn icon @click.prevent="editSeal(index)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click.prevent="deleteSeal(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <AppIconBtn
      :mdi-icon-name="'mdi-plus'"
      :click-action="() => (isOpenedCreateDialog = !isOpenedCreateDialog)"
      class="float-btn"
    />
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? 'シールを編集' : 'シールを追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="sealForm" v-model="isValid">
        <img v-if="pokemon.src" :src="pokemon.src" />
        <v-file-input
          v-model="sealImage"
          show-size
          accept="image/*"
          label="画像を追加"
          prepend-icon="mdi-camera"
          outlined
          @change="selectedSealImage($event)"
        />
        <v-row>
          <v-col>
            <v-text-field v-model="pokemon.name" label="ポケモンの名前" outlined />
          </v-col>
          <v-col>
            <span>レア度</span>
            <v-rating length="5" v-model="pokemon.rate" />
          </v-col>
        </v-row>
        <AppBtn :click-action="createSeal" :btn-text="isEdit ? 'シールを修正' : 'シール追加'" />
      </v-form>
    </AppDialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch, reactive } from '@nuxtjs/composition-api'
// TODO データベースから
const cards: any = [
  { id: 1, src: '', text: 'ポケモン' },
  { id: 2, src: '', text: 'ポケモン2' },
  { id: 3, src: '', text: 'ポケモン3' },
  { id: 4, src: '', text: 'ポケモン4' },
  { id: 5, src: '', text: 'ポケモン5' },
  { id: 6, src: '', text: 'ポケモン6' },
  { id: 7, src: '', text: 'ポケモン7' },
  { id: 8, src: '', text: 'ポケモン8' },
  { id: 9, src: '', text: 'ポケモン9' },
  { id: 10, src: '', text: 'ポケモン10' }
]

export default defineComponent({
  setup() {
    // カードデータ
    const cardDatas = ref<PokemonDatas[]>([])
    const pokemon = reactive({
      name: '',
      rate: 0,
      src: ''
    })
    // formDOM
    const sealForm = ref<HTMLFormElement | null>(null)
    const isValid = ref(false)
    const sealImage = ref<any>()

    const isOpenedCreateDialog = ref(false)
    const isEdit = ref(false)
    const sealIndex = ref<number | null>(null)
    // シール作成
    const selectedSealImage = (file: any) => {
      if (!file) return
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      // FIXME 型宣言いる？
      fileReader.onload = (event: any) => {
        pokemon.src = event.target.result
      }
    }
    const createSeal = () => {
      if (!sealForm.value!.validate()) return
      if (!isEdit.value) {
        cardDatas.value.push({
          name: pokemon.name,
          src: pokemon.src,
          rate: pokemon.rate
        })
      } else {
        cardDatas.value[sealIndex.value!].name = pokemon.name
        cardDatas.value[sealIndex.value!].src = pokemon.src
        cardDatas.value[sealIndex.value!].rate = pokemon.rate
      }
      pokemon.name = ''
      pokemon.src = ''
      pokemon.rate = 0
      sealImage.value = null
      isOpenedCreateDialog.value = false
    }
    // シール編集
    const editSeal = (index: number) => {
      isEdit.value = true
      sealIndex.value = index
      pokemon.name = cardDatas.value[sealIndex.value!].name
      pokemon.src = cardDatas.value[sealIndex.value!].src
      pokemon.rate = cardDatas.value[sealIndex.value!].rate
      isOpenedCreateDialog.value = true
    }
    // シール削除
    const deleteSeal = (index: number) => {
      cardDatas.value.splice(index, 1)
    }

    /* init */
    const { $fetchState } = useFetch(async () => {
      // cardDatas.value = await xxx
    })
    return {
      cards,
      isOpenedCreateDialog,
      createSeal,
      isEdit,
      sealForm,
      editSeal,
      deleteSeal,
      isValid,
      sealImage,
      selectedSealImage,
      pokemon,
      cardDatas
    }
  }
})
</script>
<style scoped>
.float-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
</style>
