<template>
  <v-simple-table fixed-header>
    <thead class="text-center">
      <tr>
        <th v-for="(head, index) in tableHead" :key="index" class="text-center">
          {{ head }}
        </th>
      </tr>
    </thead>
    <tbody v-if="items.length" class="text-center">
      <tr v-for="(item, index) in items" :key="item.day">
        <td class="py-3">{{ item.day }}</td>
        <td class="py-3">
          <span v-for="(list, index) in item.items" :key="index"> {{ list.text }}<br /> </span>
        </td>
        <td class="py-3">
          {{ item.limit ? 'あり' : 'なし' }}
        </td>
        <td class="py-3">
          {{ item.limit && item.limitDay ? item.limitDay : '--' }}
        </td>
        <td class="py-3">
          {{ item.repeat ? 'あり' : 'なし' }}
        </td>
        <td class="py-3">
          {{ item.repeat && item.repeatDay ? item.repeatDay : '--' }}
        </td>
        <td class="py-3">
          <v-btn icon x-small class="mr-4" @click.prevent="editItem(index)"><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn icon x-small @click.prevent="deleteItem(index)"><v-icon>mdi-delete</v-icon></v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
const tableHead = ['日付', '持ち物', '締め切り', '締切日', '繰り返し', '繰り返し終了日', '編集']
export default defineComponent({
  name: 'OptionItemTable',
  props: {
    items: {
      type: Array
    }
  },
  setup(_, { emit }) {
    const editItem = (index: number) => {
      emit('edit-item', index)
    }
    const deleteItem = (index: number) => {
      emit('delete-item', index)
    }
    return { tableHead, editItem, deleteItem }
  }
})
</script>
