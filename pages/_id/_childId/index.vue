<template>
  <v-container id="page-top" class="text-center">
    <!-- TODO: 時間判定で表示する文字変える -->
    <h1 class="mb-8">おはようございます。</h1>
    <h2
      class="
        show-date
        d-inline-block
        secondary
        primary--text
        py-3
        px-6
        rounded-pill
      "
    >
      4月4日
    </h2>
    <div class="notice-list my-10">
      <h3 class="font-weight-bold mb-2">今日は何かがあります</h3>
      <h3 class="font-weight-bold mb-2">今日は何かがあります</h3>
    </div>
    <!-- TODO: タイマーを設定してstoreに時間を保存 -->
    <v-form class="d-flex justify-center align-stretch">
      <p class="mr-5">もくひょう</p>
      <v-select outlined :items="times" class="mr-5" />
      <p class="mr-5">分</p>
      <AppBtn btn-text="スタート！" @click="click" />
    </v-form>
    <!-- TODO: todoページへ遷移 -->
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

const times = [5, 10, 15, 20, 25]
export default defineComponent({
  setup() {
    const click = () => {}
    return { times, click }
  }
})
</script>

<style scoped></style>
