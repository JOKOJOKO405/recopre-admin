<template>
  <v-row v-if="!$fetchState.pending" no-gutters justify="center">
    <v-col v-if="timeTables.length" cols="12" align-self="center">
      <v-simple-table fixed-header>
        <thead class="text-center">
          <tr>
            <th v-for="(head, index) in tableHead" :key="index" class="text-center">
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(timeTable, index) in timeTables" :key="timeTable.id">
            <td>{{ timeTable.day }}</td>
            <td v-for="subject in timeTable.subjects" :key="subject.id">
              {{ subject }}
            </td>
            <td>
              <v-btn icon x-small class="mr-4" @click.prevent="editTimeTable(index)"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn icon x-small @click.prevent="deleteTimeTable(index)"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
    <v-col v-else align-self="center" class="text-center">
      <AppBtn :click-action="openCreateDialog" :btn-text="'時間割を追加'" />
    </v-col>
    <AppDialog
      :is-opened-dialog="isOpenedCreateDialog"
      :dialog-title="'時間割を追加'"
      :click-action="() => (isOpenedCreateDialog = false)"
    >
      <v-form ref="timetableForm" v-model="isValid" lazy-validation>
        <v-row no-gutters>
          <v-col cols="12">
            <v-select outlined :rules="rules.select" :items="days" label="曜日" />
          </v-col>
        </v-row>
        <v-row v-for="(item, index) in textFields" :key="index" no-gutters>
          <v-col cols="9">
            <v-text-field v-model="item.text" :rules="rules.text" outlined :label="`${index + 1}時間目`" class="pr-4" />
          </v-col>
          <v-spacer />
          <AppIconBtn :mdi-icon-name="'mdi-plus'" :click-action="addTimeTable" class="mr-3" />
          <AppIconBtn :mdi-icon-name="'mdi-minus'" :click-action="index => removeTimeTable(index)" />
        </v-row>
        <AppBtn :click-action="createTimetable" :btn-text="'時間割作成'" />
      </v-form>
    </AppDialog>
  </v-row>
</template>

<script lang="ts">
import { ref, defineComponent, useFetch } from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'

const days = ['月', '火', '水', '木', '金']
const tableHead = ['曜日', 1, 2, 3, 4, 5, '編集']

export default defineComponent({
  setup() {
    const timeTables = ref<Timetable[]>([])

    const { $fetchState } = useFetch(async () => {
      // TODO データベースから取ってくる
      timeTables.value = await [
        {
          id: 1,
          day: '月',
          subjects: ['国語', '算数', '図工', '図工', '生活']
        },
        {
          id: 2,
          day: '火',
          subjects: ['図書', '算数', '国語', '道徳', '音楽']
        },
        {
          id: 3,
          day: '水',
          subjects: ['体育', '音楽', '生活', '国語', '算数']
        },
        {
          id: 4,
          day: '木',
          subjects: ['国語', '書写', '算数', '体育', '音楽']
        },
        {
          id: 5,
          day: '金',
          subjects: ['国語', '算数', '国語', '生活', '体育']
        }
      ]
    })
    const deleteTimeTable = (index: number) => {
      timeTables.value.splice(index, 1)
    }
    const editTimeTable = (index: number) => {
      console.debug(index)
    }

    const isOpenedCreateDialog = ref(false)
    const openCreateDialog = () => {
      isOpenedCreateDialog.value = true
    }

    const { textRules, selectRules } = useValidationRules()

    const rules = {
      text: textRules(),
      select: selectRules()
    }
    const isValid = ref(false)

    const timetableForm = ref<HTMLFormElement | null>(null)

    // input操作
    const textFields = ref<TimetableInput[]>([
      {
        id: 0,
        text: ''
      }
    ])

    const addTimeTable = () => {
      const newId = textFields.value.slice(-1)[0].id + 1
      textFields.value.push({ id: newId, text: '' })
    }
    const removeTimeTable = (index: number) => {
      if (textFields.value.length < 2) return
      textFields.value.splice(index, 1)
    }
    const createTimetable = () => {
      if (!timetableForm.value!.validate()) return
    }

    return {
      tableHead,
      timeTables,
      deleteTimeTable,
      editTimeTable,
      isOpenedCreateDialog,
      openCreateDialog,
      days,
      addTimeTable,
      isValid,
      rules,
      removeTimeTable,
      textFields,
      createTimetable,
      timetableForm
    }
  }
})
</script>
