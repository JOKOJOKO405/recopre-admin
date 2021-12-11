<template>
  <div>
    <div
      v-for="item in todos"
      :key="item.id"
      class="d-flex justify-space-between mb-2"
    >
      <div>
        {{ item.name }}
      </div>
      <div>
        <i
          class="text-body-1 mdi mdi-pencil d-inline mr-2 primary--text"
          @click="$emit('update', item)"
        />
        <i
          class="text-body-1 mdi mdi-delete error--text"
          @click="$emit('delete', item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'CommonTodoTds',
  props: {
    todos: {
      type: Array as PropType<Todos[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
