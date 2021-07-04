<template>
  <v-container v-if="!$fetchState.pending" fluid>
    <v-row no-gutters justify="center">
      <v-col cols="12" align-self="center">
        <Timetable :time-tables="timeTables" @edit-time-table="editTimeTable" @delete-time-table="deleteTimeTable" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col align-self="center" class="text-center">
        <AppBtn :click-action="openCreateDialog" :btn-text="'時間割を追加'" />
      </v-col>
    </v-row>
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="isEdit ? '時間割を編集' : '時間割を追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="timetableForm" v-model="isValid" lazy-validation>
        <v-row no-gutters>
          <v-col cols="12">
            <v-select
              v-model="days.value"
              outlined
              :rules="rules.select"
              :items="days"
              :item-value="isEdit ? 'days' : ''"
              label="曜日"
              @change="fetchDay($event)"
            />
          </v-col>
        </v-row>
        <v-row v-for="(item, index) in textFields" :key="index" no-gutters>
          <v-col cols="9">
            <v-text-field v-model="item.text" :rules="rules.text" outlined :label="`${index + 1}時間目`" class="pr-4" />
          </v-col>
          <v-spacer />
          <AppIconBtn :mdi-icon-name="'mdi-plus'" :click-action="add" class="mr-3" />
          <AppIconBtn :mdi-icon-name="'mdi-minus'" :click-action="index => remove(index)" />
        </v-row>
        <AppBtn :click-action="createTimetable" :btn-text="isEdit ? '時間割を修正' : '時間割作成'" />
      </v-form>
    </AppDialog>
  </v-container>
</template>

<script lang="ts">
import { ref, defineComponent, useFetch, onMounted } from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
import { useIncrementInputs } from '@/modules/useIncrementInputs'

const days = ['月', '火', '水', '木', '金']

export default defineComponent({
  setup(_, { root }) {
    const timeTables = ref<Timetable[]>([])

    const { $fetchState } = useFetch(async () => {
      // TODO データベースから取ってくる
      // timeTables.value = await [
      //   {
      //     id: 1,
      //     day: '月',
      //     subjects: ['国語', '算数', '図工', '図工', '生活']
      //   },
      //   {
      //     id: 2,
      //     day: '火',
      //     subjects: ['図書', '算数', '国語', '道徳', '音楽']
      //   },
      //   {
      //     id: 3,
      //     day: '水',
      //     subjects: ['体育', '音楽', '生活', '国語', '算数']
      //   },
      //   {
      //     id: 4,
      //     day: '木',
      //     subjects: ['国語', '書写', '算数', '体育', '音楽']
      //   },
      //   {
      //     id: 5,
      //     day: '金',
      //     subjects: ['国語', '算数', '国語', '生活', '体育']
      //   }
      // ]
    })

    const isOpenedCreateDialog = ref(false)

    const { textRules, selectRules } = useValidationRules()

    const rules = {
      text: textRules(),
      select: selectRules()
    }
    const isValid = ref(false)

    const timetableForm = ref<HTMLFormElement | null>(null)

    // input操作
    const { textFields, add, remove } = useIncrementInputs()

    const selectedDay = ref('')
    const fetchDay = (event: any) => {
      selectedDay.value = event
    }

    const openCreateDialog = () => {
      selectedDay.value = ''
      textFields.value = [{ id: 0, text: '' }]
      isOpenedCreateDialog.value = true
    }

    const createTimetable = () => {
      if (!timetableForm.value!.validate()) return
      if (isEdit.value && !timetableId.value) {
        timeTables.value[timetableId.value].day = selectedDay.value
        timeTables.value[timetableId.value].subjects = textFields.value
        isEdit.value = false
      } else {
        timeTables.value.push({
          day: selectedDay.value,
          subjects: textFields.value
        })
      }
      isOpenedCreateDialog.value = false
    }

    // 編集
    const isEdit = ref(false)
    const timetableId = ref<number>(0)
    const editTimeTable = (index: number) => {
      isEdit.value = true
      isOpenedCreateDialog.value = true
      timetableId.value = index
    }

    // 削除
    const deleteTimeTable = (index: number) => {
      timeTables.value.splice(index, 1)
      textFields.value = [{ id: 0, text: '' }]
      selectedDay.value = ''
    }
    // ヘッダータイトル
    const updateHeaderTitle = () => {
      root.$nuxt.$emit('updateHeaderTitle', '時間割')
    }
    onMounted(() => {
      updateHeaderTitle()
    })

    return {
      timeTables,
      deleteTimeTable,
      editTimeTable,
      isOpenedCreateDialog,
      days,
      add,
      isValid,
      rules,
      remove,
      textFields,
      createTimetable,
      timetableForm,
      fetchDay,
      isEdit,
      openCreateDialog
    }
  }
})
</script>
