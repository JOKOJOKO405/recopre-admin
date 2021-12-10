<template>
  <div v-if="!$fetchState.pending">
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
            :items="grades"
            item-value="id"
            item-text="grade"
          />
        </div>
        <div class="pa-3">
          <h2 class="text-h6 mb-2">
            <span class="pr-3">朝のやること</span>
            <v-btn
              fab
              x-small
              depressed
              color="primary"
              @click.stop="openCreateTodosDialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </h2>
          <v-select
            outlined
            multiple
            chips
            label="やること"
            v-model="child.todos.morning"
            :items="todos.morning"
            item-value="id"
            item-text="name"
          />
        </div>
        <div class="pa-3">
          <h2 class="text-h6 mb-2">
            <span class="pr-3">午後のやること</span>
            <v-btn
              fab
              x-small
              depressed
              color="primary"
              @click.stop="openCreateTodosDialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </h2>
          <v-select
            outlined
            multiple
            chips
            label="やること"
            v-model="child.todos.afternoon"
            :items="todos.afternoon"
            item-value="id"
            item-text="name"
          />
        </div>
        <div class="pa-3">
          <h2 class="text-h6 mb-2">
            <span class="pr-3">夜のやること</span>
            <v-btn
              fab
              x-small
              depressed
              color="primary"
              @click.stop="openCreateTodosDialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </h2>
          <v-select
            outlined
            multiple
            chips
            label="やること"
            v-model="child.todos.evening"
            :items="todos.evening"
            item-value="id"
            item-text="name"
          />
        </div>
      </div>
      <div class="text-center">
        <AppBtn
          @click="$router.go(-1)"
          :btn-text="'キャンセル'"
          :isOutlined="true"
          class="mr-4"
        />
        <AppBtn @click="createChild" :btn-text="'登録する'" />
      </div>
    </v-form>
    <!-- TODO 別コンポーネントに切り出し -->
    <AppDialog
      :is-opened-dialog="isOpenedDialog"
      :fullscreen="true"
      @close="closeCreateTodosDialog"
      dialog-title="やること登録"
    >
      <v-form class="pa-3">
        <v-text-field label="やること" outlined />
        <div class="text-right">
          <AppBtn :btn-text="'登録'" @click="createTodos" />
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
import { getTodos, getGrades } from '@/modules/API/queries'
import { filteredTodosTimezone } from '~/modules/filter'

export default defineComponent({
  setup() {
    const createChildForm = ref<HTMLFormElement | null>(null)
    const child = reactive({
      name: '',
      grade: 0,
      todos: {
        morning: [],
        afternoon: [],
        evening: []
      },
      icon: 0
    })
    const grades = ref<Grades[]>([])
    const todos = ref<DivideTodos | null>()
    const createChild = () => {
      console.debug(child)
    }
    /**
     * todo dialog
     */
    const isOpenedDialog = ref(false)
    const openCreateTodosDialog = () => {
      isOpenedDialog.value = true
    }
    const closeCreateTodosDialog = () => {
      isOpenedDialog.value = false
    }
    /**
     * init
     */
    useFetch(async () => {
      const [resTodos, resGrades]: any = await Promise.all([
        getTodos(),
        getGrades()
      ])
      todos.value = filteredTodosTimezone(resTodos.data)
      grades.value = resGrades.data
    })
    return {
      createChildForm,
      child,
      createChild,
      todos,
      grades,
      isOpenedDialog,
      openCreateTodosDialog,
      closeCreateTodosDialog
    }
  }
})
</script>
