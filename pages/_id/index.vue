<template>
  <div v-if="!$fetchState.pending" id="parent-id-page" style="height: 100vh">
    <div
      class="d-flex justify-center align-center ma-auto mb-6"
      style="height: 100%"
    >
      <div>
        <h1 class="mb-6">お子様を選択</h1>
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
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useFetch,
  useStore,
  useRoute
} from '@nuxtjs/composition-api'
import { getChildren } from '@/modules/API/queries'
export default defineComponent({
  layout: 'no-header',
  setup() {
    const store = useStore()
    const route = useRoute()
    const userId = ref<number>(0)

    // FIXME: 型つくる
    const children = ref<any[]>([])

    /**
     * init
     */
    useFetch(async () => {
      const headers = await store.getters['user/headers']
      const resChildren = await getChildren(headers)
      children.value = resChildren.data
      userId.value = parseInt(route.value.params.id)
    })
    return {
      children,
      userId
    }
  }
})
</script>
