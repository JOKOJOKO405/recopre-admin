<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="3">
        <v-card>
          <v-card-title class="justify-center">{{ card.text }}</v-card-title>
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
    <AppIconBtn :mdi-icon-name="'mdi-plus'" :click-action="() => (isOpenedCreateDialog = true)" class="float-btn" />
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? 'シールを編集' : 'シールを追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="sealForm" v-model="isValid">
        <v-file-input v-model="sealImage" accept="image/*" label="画像を追加" prepend-icon="mdi-camera" outlined />
        <v-row>
          <v-col>
            <v-text-field label="ポケモンの名前" outlined />
          </v-col>
          <v-col>
            <span>レア度</span>
            <v-rating length="5" />
          </v-col>
        </v-row>
        <AppBtn :click-action="createSeal" :btn-text="isEdit ? 'シールを修正' : 'シール追加'" />
      </v-form>
    </AppDialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
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
    // formDOM
    const sealForm = ref<HTMLFormElement | null>(null)
    const isValid = ref(false)
    const sealImage = ref<any>()

    const isOpenedCreateDialog = ref(false)
    const isEdit = ref(false)
    // シール作成
    const createSeal = () => {
      if (!sealForm.value!.validate()) return
    }
    // シール編集
    const editSeal = (index: number) => {}
    // シール削除
    const deleteSeal = (index: number) => {}
    return { cards, isOpenedCreateDialog, createSeal, isEdit, sealForm, editSeal, deleteSeal, isValid, sealImage }
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
