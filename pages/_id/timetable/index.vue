<template>
  <v-row no-gutters justify="center">
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
      <v-form> </v-form>
    </AppDialog>
  </v-row>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const tableHead = ['曜日', 1, 2, 3, 4, 5, '編集']
    const timeTables = ref<Timetable[]>([])

    timeTables.value = [
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

    return { tableHead, timeTables, deleteTimeTable, editTimeTable, isOpenedCreateDialog, openCreateDialog }
  }
})
</script>
