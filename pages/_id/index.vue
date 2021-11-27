<template>
  <div v-if="!$fetchState.pending" id="parent-id-page" style="height: 100vh">
    <div
      class="d-flex justify-center align-center ma-auto mb-6"
      style="height: 100%"
    >
      <div>
        <h1 class="mb-6">お子様を選択</h1>
        <div class="text-center">
          <template v-if="hasChildren"> </template>
          <template v-else>
            <h3 class="gray600--text mb-3">まだ登録がありません</h3>
            <AppBtn btn-text="お子様を登録" @click="openChildCreateDialog" />
          </template>
        </div>
      </div>
    </div>
    <AppDialog
      :is-opened-dialog="isOpenedChildCreateDialog"
      :fullscreen="true"
      @close="closeCreateChildDialog"
      dialog-title="お子様を登録"
    >
      <v-form ref="createChildForm">
        <div>
          <div class="d-flex">
            <v-text-field
              outlined
              label="名前"
              v-model="child.name"
              class="mb-2 pa-3"
            />
            <v-select
              outlined
              label="学年"
              v-model="child.grade"
              class="mb-2 pa-3"
            />
          </div>
          <v-select
            outlined
            multiple
            chips
            label="やること"
            v-model="child.todos"
            :items="todos"
            class="mb-2 pa-3"
            item-value="id"
            item-text="name"
          />
        </div>
        <div class="text-center">
          <AppBtn @click="createChild" :btn-text="'登録する'" />
        </div>
      </v-form>
    </AppDialog>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  useFetch
} from '@nuxtjs/composition-api'
import { getTodos } from '@/modules/API/queries'
export default defineComponent({
  layout: 'no-header',
  setup() {
    // TODO: APIで取得
    const hasChildren = ref(false)
    const todos = ref<Todos[]>([])
    const isOpenedChildCreateDialog = ref(false)
    const createChildForm = ref<HTMLFormElement | null>(null)
    const child = reactive({
      name: '',
      grade: 0,
      todos: [],
      icon: 0
    })

    const createChild = () => {
      console.debug(child)
    }

    const openChildCreateDialog = () => {
      isOpenedChildCreateDialog.value = true
    }
    const closeCreateChildDialog = () => {
      isOpenedChildCreateDialog.value = false
    }

    /**
     * init
     */
    useFetch(async () => {
      const res = await getTodos()
      todos.value = res.data
    })
    return {
      hasChildren,
      isOpenedChildCreateDialog,
      openChildCreateDialog,
      closeCreateChildDialog,
      createChildForm,
      child,
      todos,
      createChild
    }
  }
})
</script>
