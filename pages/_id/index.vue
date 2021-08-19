<template>
  <div id="parent-id-page" style="height: 100vh">
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
            <AppBtn btn-text="お子様を登録" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'no-header',
  setup() {
    // TODO: APIで取得
    const hasChildren = ref(false)
    return { hasChildren }
  }
})
</script>
