<template>
  <div v-if="!$fetchState.pending">
    <div class="pa-6">
      <v-stepper v-model="stepperEl" flat>
        <!-- header -->
        <v-stepper-header>
          <v-stepper-step :complete="stepperEl > 1" step="1">
            <span class="pl-2">お子様の登録</span>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="stepperEl > 2" step="2">
            <span class="pl-2">やることリスト作成</span>
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">
            <span class="pl-2">もちもの登録</span>
          </v-stepper-step>
        </v-stepper-header>
        <!-- items -->
        <v-stepper-items>
          <v-stepper-content step="1" class="pa-6">
            <v-form ref="createChildForm">
              <div class="d-flex">
                <v-text-field
                  outlined
                  label="名前"
                  v-model="child.name"
                  class="pr-1"
                />
                <v-select
                  outlined
                  label="学年"
                  v-model="child.grade"
                  class="pl-1"
                  :items="grades"
                  item-value="id"
                  item-text="grade"
                />
              </div>
              <div class="select-icon">
                <h3 class="text-h6 font-weight-bold font--text">
                  アイコンを選択
                </h3>
                <div class="d-flex justify-space-around">
                  <div
                    v-for="avatar in avatars"
                    :key="avatar.id"
                    class="text-center"
                  >
                    <label>
                      <input
                        type="radio"
                        v-model="child.icon"
                        :name="avatar.name"
                        :value="avatar.id"
                      />
                      <br />
                      <img
                        width="40"
                        :src="require(`@/assets/images/icons/${avatar.src}`)"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <AppBtn
                  @click="$router.go(-1)"
                  :btn-text="'キャンセル'"
                  :isOutlined="true"
                  class="mr-3"
                />
                <AppBtn @click="registerChild" :btn-text="'登録する'" />
              </div>
            </v-form>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-form ref="updateChildTodosForm">
              <div class="pa-3">
                <h2 class="text-h6 mb-2">
                  <span class="pr-3">朝のやること</span>
                  <v-btn
                    fab
                    x-small
                    depressed
                    color="primary"
                    @click.stop="
                      openCreateTodosDialog(todos.morning, 'morning')
                    "
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </h2>
                <v-select
                  outlined
                  multiple
                  chips
                  label="朝のやること"
                  v-model="childTodos.todos.morning"
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
                    @click.stop="
                      openCreateTodosDialog(todos.afternoon, 'afternoon')
                    "
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </h2>
                <v-select
                  outlined
                  multiple
                  chips
                  label="午後のやること"
                  v-model="childTodos.todos.afternoon"
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
                    @click.stop="
                      openCreateTodosDialog(todos.evening, 'evening')
                    "
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </h2>
                <v-select
                  outlined
                  multiple
                  chips
                  label="夜のやること"
                  v-model="childTodos.todos.evening"
                  :items="todos.evening"
                  item-value="id"
                  item-text="name"
                />
              </div>
            </v-form>
            <div class="text-right">
              <AppBtn
                @click="$router.go(-1)"
                :btn-text="'あとで'"
                :isOutlined="true"
                class="mr-3"
              />
              <AppBtn @click="updateChild" :btn-text="'登録する'" />
            </div>
          </v-stepper-content>

          <v-stepper-content step="3">
            <div class="d-flex">
              <v-text-field
                outlined
                label="もちもの"
                v-model="childItems.item.name"
                class="pr-1"
              />
              <v-text-field
                v-model="childItems.item.limited_day"
                outlined
                type="date"
                class="pl-1"
              />
            </div>

            <div class="text-right">
              <AppBtn
                @click="$router.go(-1)"
                :btn-text="'あとで'"
                :isOutlined="true"
                class="mr-3"
              />
              <AppBtn @click="updateChild" :btn-text="'登録する'" />
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <v-form ref="createChildForm">
      <div class="text-center"></div>
    </v-form>
    <CreateTodosDialog
      v-if="timezoneTodos"
      :is-opened-dialog="isOpenedDialog"
      :timezone-todos="timezoneTodos"
      :timezone="timezone"
      @close="closeCreateTodosDialog"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  useFetch,
  useStore
} from '@nuxtjs/composition-api'
import { getTodos, getGrades, createChild } from '@/modules/API/queries'
import { filteredTodosTimezone } from '~/modules/filter'
// TODO 切り出し
const avatars = [
  { id: 0, name: '男の子1', src: 'boy01.png' },
  { id: 1, name: '男の子2', src: 'boy02.png' },
  { id: 2, name: '男の子3', src: 'boy03.png' },
  { id: 3, name: '男の子4', src: 'boy04.png' },
  { id: 4, name: '女の子1', src: 'girl01.png' },
  { id: 5, name: '女の子2', src: 'girl02.png' },
  { id: 6, name: '女の子3', src: 'girl03.png' },
  { id: 7, name: '女の子4', src: 'girl04.png' }
]

export default defineComponent({
  layout: 'no-header',
  setup() {
    const store = useStore()
    const createChildForm = ref<HTMLFormElement | null>(null)
    const updateChildTodosForm = ref<HTMLFormElement | null>(null)
    const child = reactive({
      name: '',
      grade: 0,
      icon: 0
    })
    const childTodos = reactive({
      todos: {
        morning: [],
        afternoon: [],
        evening: []
      }
    })
    const childItems = reactive({
      item: {
        name: '',
        limited_day: ''
      }
    })
    const grades = ref<Grades[]>([])
    const todos = ref<DivideTodos | null>()
    const stepperEl = ref<number>(1)
    const timezoneTodos = ref<Todos | null>(null)
    const timezone = ref<Timezone | null>(null)
    const registerChild = async () => {
      try {
        const headers = await store.getters['user/headers']
        // if (!headers) return
        const childData = await createChild(child, headers)
        console.debug('childData', childData)
        stepperEl.value = 2
      } catch (error) {}
    }
    const updateChild = () => {
      console.debug(child)
      stepperEl.value = 3
    }
    /**
     * todo dialog
     */
    const isOpenedDialog = ref(false)
    const openCreateTodosDialog = (todos: Todos, time: Timezone) => {
      timezoneTodos.value = todos
      timezone.value = time
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
      childTodos,
      childItems,
      registerChild,
      todos,
      grades,
      isOpenedDialog,
      openCreateTodosDialog,
      closeCreateTodosDialog,
      timezoneTodos,
      timezone,
      stepperEl,
      updateChild,
      updateChildTodosForm,
      avatars
    }
  }
})
</script>

<style scoped>
@media only screen and (max-width: 959px) {
  ::v-deep .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: block;
  }
}
::v-deep .v-stepper__header {
  box-shadow: none;
  border-bottom: 1px solid #ccc;
}
</style>
