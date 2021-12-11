<template>
  <div v-if="!$fetchState.pending" id="parent-id-page" class="pa-6">
    <div class="pa-6 white rounded-lg">
      <div class="child_register mb-8">
        <h1 class="mb-4 text-h5 font-weight-bold">お子様を選択</h1>
        <div class="text-center">
          <template v-if="children.length">
            {{ children }}
          </template>
          <template v-else>
            <h3 class="gray600--text mb-3">まだ登録がありません</h3>
            <AppBtn
              btn-text="お子様を登録"
              @click="$router.push(`${userId}/register`)"
            />
          </template>
        </div>
      </div>
      <div class="todos_register">
        <div class="d-flex justify-space-between mb-4">
          <h2 class="mb-4 text-h5 font-weight-bold">やること登録・編集</h2>
          <AppBtn btn-text="登録" @click="openDialog" />
        </div>
        <CreateCommonTodoTable
          :common-todos="commonTodos"
          :timezones="timezones"
          @update="openDialogForEdit"
          @delete="deleteTodo"
        />
      </div>
    </div>
    <AppDialog
      :is-opened-dialog="isOpenedDialog"
      dialog-title="やること登録"
      btn-text="登録"
      @close="closeDialog"
      @click="registTodos(commonTodoInput)"
    >
      <v-text-field v-model="commonTodoInput.name" label="やること" outlined />
      <v-text-field
        v-model="commonTodoInput.kana"
        label="やることふりがな（任意）"
        outlined
      />
      <v-select
        v-if="!isEditable"
        v-model="commonTodoInput.timezone"
        outlined
        :items="timezones"
      />
    </AppDialog>
  </div>
</template>

<script lang="ts">
const timezones = [
  { text: '朝', value: 'morning' },
  { text: '午後', value: 'afternoon' },
  { text: '夜', value: 'evening' }
]
import {
  defineComponent,
  ref,
  reactive,
  useFetch,
  useStore,
  useRoute
} from '@nuxtjs/composition-api'
import {
  getChildren,
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos
} from '@/modules/API/queries'
import { filteredTodosTimezone } from '~/modules/filter'

export default defineComponent({
  layout: 'no-header',
  setup() {
    const store = useStore()
    const route = useRoute()
    const userId = ref<number>(0)

    // FIXME: 型つくる
    const children = ref<any[]>([])
    const commonTodos = ref<DivideTodos | null>()
    // FIXME CreateTodosDialogと同じなので切り出す
    const commonTodoInput = reactive({
      name: '',
      kana: '',
      timezone: 'morning'
    })
    const initTodosInput = () => ({
      name: '',
      kana: '',
      timezone: 'morning'
    })

    const isOpenedDialog = ref(false)
    const openDialog = () => {
      isOpenedDialog.value = true
    }
    const closeDialog = () => {
      isOpenedDialog.value = false
    }
    /**
     * todo
     */
    const isEditable = ref(false)
    const registTodos = (todo: Todos) => {
      isEditable.value ? updateTodo(todo.id) : createCommonTodos()
    }
    const createCommonTodos = async () => {
      try {
        console.debug(commonTodoInput)
        await createTodos(commonTodoInput)
        Object.assign(commonTodoInput, initTodosInput())
        closeDialog()
        fetch()
      } catch (error) {
        console.error(error)
      }
    }
    const openDialogForEdit = (item: Todos) => {
      isEditable.value = true
      Object.assign(commonTodoInput, item)
      isOpenedDialog.value = true
    }
    const updateTodo = async (id: number) => {
      try {
        await updateTodos(id, commonTodoInput)
        Object.assign(commonTodoInput, initTodosInput())
        closeDialog()
        fetch()
      } catch (error) {
        console.error(error)
      }
    }
    const deleteTodo = async (id: number) => {
      try {
        await deleteTodos(id)
      } catch (error) {
        console.error(error)
      }
    }

    /**
     * init
     */
    const { fetch } = useFetch(async () => {
      const headers = await store.getters['user/headers']
      const [resChildren, resTodos]: any = await Promise.all([
        getChildren(headers),
        getTodos()
      ])
      children.value = resChildren.data
      commonTodos.value = filteredTodosTimezone(resTodos.data)
      userId.value = parseInt(route.value.params.id)
    })
    return {
      children,
      commonTodos,
      userId,
      createCommonTodos,
      isOpenedDialog,
      openDialog,
      closeDialog,
      commonTodoInput,
      timezones,
      updateTodo,
      deleteTodo,
      openDialogForEdit,
      isEditable,
      registTodos
    }
  }
})
</script>
