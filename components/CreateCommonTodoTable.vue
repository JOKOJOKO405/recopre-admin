<template>
  <v-simple-table>
    <thead>
      <tr>
        <th v-for="time in timezones" :key="time.index" class="text-left">
          {{ time.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!commonTodos">
        <td colspan="3" class="text-center">まだ登録はありません</td>
      </tr>
      <tr v-else>
        <td class="td pa-4">
          <CommonTodoTds
            :todos="commonTodos.morning"
            @update="updateTodo"
            @delete="deleteTodo"
          />
        </td>
        <td class="td pa-4">
          <CommonTodoTds
            :todos="commonTodos.afternoon"
            @update="updateTodo"
            @delete="deleteTodo"
          />
        </td>
        <td class="td pa-4">
          <CommonTodoTds
            :todos="commonTodos.evening"
            @update="updateTodo"
            @delete="deleteTodo"
          />
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CreateCommonTodoTable',
  props: {
    timezones: {
      type: Array,
      required: true
    },
    commonTodos: {
      type: Object as PropType<DivideTodos>,
      required: true
    }
  },
  setup(_, { emit }) {
    const updateTodo = (item: Todos) => {
      emit('update', item)
    }
    const deleteTodo = (id: number) => {
      emit('delete', id)
    }
    return { updateTodo, deleteTodo }
  }
})
</script>

<style scoped>
::v-deep .td {
  vertical-align: top;
}
</style>
