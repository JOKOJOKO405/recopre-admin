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
    <v-form class="ma-auto" style="width: 60%">
      <div class="d-flex justify-center">
        <p class="mr-5 pt-4">もくひょう</p>
        <v-select
          v-model="time"
          outlined
          class="mr-5"
          :items="setTime"
          :rules="rules.time"
        />
        <p class="mr-5 pt-4">分</p>
      </div>
      <AppBtn btn-text="スタート！" @click="click" />
    </v-form>
    <!-- TODO: todoページへ遷移 -->
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTodoTimer } from '~/modules/useTodoTimer'
import useValidationRules from '~/modules/useValidationRules'

export default defineComponent({
  setup() {
    const { setTime, time } = useTodoTimer()
    const { selectTimeRules } = useValidationRules()
    const rules = {
      time: selectTimeRules()
    }

    const click = () => {}
    return { time, setTime, click, rules }
  }
})
</script>

<style scoped></style>
