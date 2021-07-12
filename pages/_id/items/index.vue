<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-col cols="12" align-self="center">
        <OptionItemTable
          :items="events"
          @edit-item="editItem"
          @delete-item="deleteItem"
        />
      </v-col>
    </v-row>
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? '持ち物を編集' : '持ち物を追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="itemForm" v-model="isValid">
        <v-row>
          <v-col cols="12" class="mb-4">
            <v-menu
              v-model="calendar"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  :rules="rules.date"
                  label="日付"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="choiceDay($event)"
                no-title
                scrollable
              />
            </v-menu>
          </v-col>
        </v-row>
        <v-row v-for="(item, index) in textFields" :key="index" no-gutters>
          <v-col cols="9">
            <v-text-field
              v-model="item.text"
              :rules="rules.text"
              outlined
              :label="`${index + 1}つめの持ち物`"
              class="pr-4"
            />
          </v-col>
          <v-spacer />
          <AppIconBtn
            :mdi-icon-name="'mdi-plus'"
            :click-action="add"
            class="mr-3"
          />
          <AppIconBtn
            :mdi-icon-name="'mdi-minus'"
            :click-action="index => remove(index)"
          />
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-switch
              v-model="hasDeadline"
              inset
              :label="`期限：${hasDeadline ? 'あり' : 'なし'}`"
              class="ma-0"
            />
          </v-col>
          <v-col cols="6">
            <v-switch
              v-model="isRepeated"
              inset
              :label="`くり返し：${isRepeated ? 'あり' : 'なし'}`"
              class="ma-0"
            />
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col cols="6" v-if="hasDeadline">
            <v-menu
              v-model="limitedDay"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  :rules="rules.date"
                  label="期限"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="choiceLimitedDay($event)"
                :rules="rules.date"
                no-title
                scrollable
              />
            </v-menu>
          </v-col>
          <v-spacer v-if="isRepeated && !hasDeadline" />
          <v-col cols="6" v-if="isRepeated">
            <v-menu
              v-model="repeatDay"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  :rules="rules.date"
                  label="繰り返し終了日"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                />
              </template>
              <v-date-picker
                v-model="date"
                @input="choiceRepeatDay($event)"
                :rules="rules.date"
                no-title
                scrollable
              />
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <AppBtn
            :click-action="
              () => {
                isOpenedCreateDialog = false
              }
            "
            :btn-text="'キャンセル'"
            is-outlined="true"
            class="mr-4"
          />
          <AppBtn
            :click-action="createItemList"
            :btn-text="isEdit ? '修正' : '追加'"
          />
        </v-row>
      </v-form>
    </AppDialog>
    <AppIconBtn
      :mdi-icon-name="'mdi-plus'"
      :click-action="() => (isOpenedCreateDialog = !isOpenedCreateDialog)"
      class="float-btn"
    />
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useFetch,
  onMounted
} from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
import { useIncrementInputs } from '@/modules/useIncrementInputs'
import { useItemDialogForm } from '~/modules/useItemDialogForm'

export default defineComponent({
  // TODO: rootが非推奨、$nuxtは？
  setup(_, { root }) {
    const events = ref<EventItems[]>([])
    const itemForm = ref<HTMLFormElement | null>(null)
    // イベント追加編集フラグ
    const isOpenedCreateDialog = ref(false)
    const isValid = ref(false)
    const isEdit = ref(false)
    const itemListId = ref(0)

    const {
      hasDeadline,
      isRepeated,
      calendar,
      limitedDay,
      repeatDay,
      inputDay,
      dueDay,
      repeatEnd,
      date,
      choiceDay,
      choiceLimitedDay,
      choiceRepeatDay
    } = useItemDialogForm()

    // input操作
    const { textRules, datePickerRules } = useValidationRules()
    const { textFields, add, remove } = useIncrementInputs()
    const rules = {
      text: textRules(),
      date: datePickerRules()
    }

    const createItemList = () => {
      if (!itemForm.value!.validate()) return
      if (isEdit.value && !itemListId.value) {
        // REMIND: ここreactive?
        events.value[itemListId.value].day = inputDay.value!
        events.value[itemListId.value].items = textFields.value
        events.value[itemListId.value].limit = hasDeadline.value
        events.value[itemListId.value].limitDay = dueDay.value
        events.value[itemListId.value].repeat = isRepeated.value
        events.value[itemListId.value].repeatDay = repeatEnd.value
        isEdit.value = false
      } else {
        events.value.push({
          day: inputDay.value!,
          items: textFields.value,
          limit: hasDeadline.value,
          limitDay: dueDay.value,
          repeat: isRepeated.value,
          repeatDay: repeatEnd.value
        })
      }
      isOpenedCreateDialog.value = false
    }

    const editItem = (index: number) => {
      isEdit.value = true
      isOpenedCreateDialog.value = true
      itemListId.value = index
    }
    const deleteItem = (index: number) => {
      events.value.splice(index, 1)
      textFields.value = [{ id: 0, text: '' }]
      inputDay.value = null
    }
    // ヘッダータイトル
    const updateHeaderTitle = () => {
      root.$nuxt.$emit('updateHeaderTitle', '持ち物')
    }
    onMounted(() => {
      updateHeaderTitle()
    })
    // init
    const { $fetchState } = useFetch(async () => {
      // TODO: バックから取ってくる
      // events.value.push()
    })

    return {
      itemForm,
      events,
      calendar,
      isOpenedCreateDialog,
      isValid,
      isEdit,
      date,
      textFields,
      add,
      remove,
      rules,
      hasDeadline,
      choiceDay,
      choiceLimitedDay,
      choiceRepeatDay,
      createItemList,
      limitedDay,
      editItem,
      deleteItem,
      itemListId,
      isRepeated,
      repeatEnd,
      repeatDay
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
