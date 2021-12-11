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
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">朝</th>
              <th class="text-left">午後</th>
              <th class="text-left">夜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!commonTodos">
              <td colspan="3" class="text-center">まだ登録はありません</td>
            </tr>
            <tr v-else>
              <td class="td pa-4">
                <div
                  v-for="item in commonTodos.morning"
                  :key="item.id"
                  class="d-flex justify-space-between mb-2"
                >
                  <div>
                    {{ item.name }}
                  </div>
                  <div>
                    <i
                      class="
                        text-body-1
                        mdi mdi-pencil
                        d-inline
                        mr-2
                        primary--text
                      "
                    />
                    <i class="text-body-1 mdi mdi-delete error--text" />
                  </div>
                </div>
              </td>
              <td class="td pa-4">
                <div
                  v-for="item in commonTodos.afternoon"
                  :key="item.id"
                  class="d-flex justify-space-between mb-2"
                >
                  <div>{{ item.name }}</div>
                  <div>
                    <i
                      class="
                        text-body-1
                        mdi mdi-pencil
                        d-inline
                        mr-2
                        primary--text
                      "
                    />
                    <i class="text-body-1 mdi mdi-delete error--text" />
                  </div>
                </div>
              </td>
              <td class="td pa-4">
                <div
                  v-for="item in commonTodos.evening"
                  :key="item.id"
                  class="d-flex justify-space-between mb-2"
                >
                  <div>{{ item.name }}</div>
                  <div>
                    <i
                      class="
                        text-body-1
                        mdi mdi-pencil
                        d-inline
                        mr-2
                        primary--text
                      "
                    />
                    <i class="text-body-1 mdi mdi-delete error--text" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </div>
    <AppDialog
      :is-opened-dialog="isOpenedDialog"
      dialog-title="やること登録"
      btn-text="登録"
      @close="closeDialog"
      @click="createCommonTodos"
    >
      <v-text-field v-model="commonTodoInput.name" label="やること" outlined />
      <v-text-field
        v-model="commonTodoInput.kana"
        label="やることふりがな（任意）"
        outlined
      />
      <v-select
        v-model="commonTodoInput.timezone"
        outlined
        :items="timezones"
      />
    </AppDialog>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  useFetch,
  useStore,
  useRoute
} from '@nuxtjs/composition-api'
import { getChildren, getTodos, createTodos } from '@/modules/API/queries'
import { filteredTodosTimezone } from '~/modules/filter'

const timezones = [
  { text: '朝', value: 'morning' },
  { text: '午後', value: 'afternoon' },
  { text: '夜', value: 'evening' }
]

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
      timezones,
      commonTodoInput
    }
  }
})
</script>

<style scoped>
>>> .td {
  vertical-align: top;
}
</style>
