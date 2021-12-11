<template>
  <AppDialog
    :is-opened-dialog="isOpenedDialog"
    @close="closeCreateTodoDialog"
    @click="createTodos"
    dialog-title="やること登録"
    btn-text="登録"
  >
    <v-form class="px-3">
      <h3 class="font-weight-bold h4-text mb-1">
        {{ timezoneText }}のやること登録
      </h3>
      <div v-if="timezoneTodos.length" class="mb-2">
        {{ timezoneTodos }}
      </div>
      <v-text-field v-model="todosInput.name" label="やること" outlined />
      <v-text-field
        v-model="todosInput.kana"
        label="やることふりがな（任意）"
        outlined
      />
    </v-form>
  </AppDialog>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  computed
} from '@nuxtjs/composition-api'
import { createChildTodos } from '~/modules/API/queries'
export default defineComponent({
  name: 'CreateTodosDialog',
  props: {
    isOpenedDialog: {
      type: Boolean,
      required: true
    },
    timezoneTodos: {
      type: Array as PropType<Todos[]>,
      required: true
    },
    timezone: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    // 時間帯テキスト
    const timezoneText = computed(() => {
      switch (props.timezone) {
        case 'morning':
          return '朝'
        case 'afternoon':
          return '午後'
        case 'evening':
          return '夜'
      }
    })
    // やること登録
    const todosInput = reactive({
      name: '',
      kana: '',
      timezone: ''
    })
    const initTodosInput = () => ({
      name: '',
      kana: '',
      timezone: ''
    })
    const closeCreateTodoDialog = () => {
      Object.assign(todosInput, initTodosInput())
      emit('close')
    }
    const createTodos = () => {
      todosInput.timezone = props.timezone
      // FIXME childId
      createChildTodos(1, todosInput)
    }

    return { createTodos, timezoneText, todosInput, closeCreateTodoDialog }
  }
})
</script>
