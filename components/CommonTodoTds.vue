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
          @click="confirmToDelete"
        />
        <v-scroll-x-transition>
          <span
            v-if="isDeletable"
            class="
              px-2
              py-1
              error
              white--text
              text-overline
              font-weight-bold
              rounded
            "
            @click="$emit('delete', item.id)"
          >
            削除
          </span>
        </v-scroll-x-transition>
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
    const isDeletable = ref(false)
    const confirmToDelete = () => {
      isDeletable.value = !isDeletable.value
    }
    return { isDeletable, confirmToDelete }
  }
})
</script>
