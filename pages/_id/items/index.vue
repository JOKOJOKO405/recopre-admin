<template>
  <v-container fluid>
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? '持ち物を編集' : '持ち物を追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="itemForm" v-model="isValid">
        <v-row>
          <v-col cols="12">
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
                  label="日付"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="choiceDay($event)" no-title scrollable />
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
          <AppIconBtn :mdi-icon-name="'mdi-plus'" :click-action="add" class="mr-3" />
          <AppIconBtn :mdi-icon-name="'mdi-minus'" :click-action="index => remove(index)" />
        </v-row>
        <v-row>
          <v-col>
            <v-switch v-model="hasDeadline" inset :label="`期限：${hasDeadline ? 'あり' : 'なし'}`" class="ma-0" />
          </v-col>
          <v-col cols="12" v-if="hasDeadline">
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
                  label="日付"
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  readonly
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="choiceLimitedDay($event)" no-title scrollable />
            </v-menu>
          </v-col>
        </v-row>
        <AppBtn :click-action="createItemList" :btn-text="isEdit ? '修正' : '追加'" />
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
import { defineComponent, ref, onMounted, useFetch, reactive } from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
import { useIncrementInputs } from '@/modules/useIncrementInputs'

export default defineComponent({
  setup() {
    const calendar = ref(false)
    const limitedDay = ref(false)
    const inputDay = ref<Date | null>(null)
    const dueDay = ref<Date | null>(null)
    const events = ref<EventItems[]>([])

    // REMIND: 意味わからない
    const date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
    // イベント追加編集フラグ
    const isOpenedCreateDialog = ref(false)
    const isValid = ref(false)
    const isEdit = ref(false)
    const hasDeadline = ref(false)

    //TODO: モジュール化 input操作
    const { textRules, selectRules } = useValidationRules()
    const { textFields, add, remove } = useIncrementInputs()
    const rules = {
      text: textRules(),
      select: selectRules()
    }
    const choiceDay = (event: Date) => {
      inputDay.value = event
      calendar.value = false
    }
    const choiceLimitedDay = (event: Date) => {
      dueDay.value = event
      calendar.value = false
    }

    const createItemList = (index: number) => {
      events.value.push({
        day: inputDay.value!,
        items: textFields.value,
        limit: hasDeadline.value,
        limitDay: dueDay.value
      })
      console.debug(events.value)
      isOpenedCreateDialog.value = false
    }
    // init
    const { $fetchState } = useFetch(async () => {
      // TODO: バックから取ってくる
      // events.value.push()
    })

    return {
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
      createItemList,
      limitedDay
    }
  }
})
</script>
