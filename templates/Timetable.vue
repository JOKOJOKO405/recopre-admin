<template>
  <v-simple-table fixed-header>
    <thead class="text-center">
      <tr>
        <th v-for="(head, index) in tableHead" :key="index" class="text-center">
          {{ head }}
        </th>
      </tr>
    </thead>
    <tbody v-if="timeTables.length" class="text-center">
      <tr v-for="(timeTable, index) in timeTables" :key="timeTable.id">
        <td>{{ timeTable.day }}</td>
        <td v-for="subject in timeTable.subjects" :key="subject.id">
          {{ subject.text }}
        </td>
        <td>
          <v-btn icon x-small class="mr-4" @click.prevent="editTimeTable(index)"><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn icon x-small @click.prevent="deleteTimeTable(index)"><v-icon>mdi-delete</v-icon></v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
const tableHead = ['曜日', 1, 2, 3, 4, 5, '編集']
export default defineComponent({
  props: {
    timeTables: {
      type: Array
    }
  },
  setup(_, { emit }) {
    const editTimeTable = (index: number) => {
      emit('edit-time-table', index)
    }
    const deleteTimeTable = (index: number) => {
      emit('delete-time-table', index)
    }
    return { tableHead, editTimeTable, deleteTimeTable }
  }
})
</script>
