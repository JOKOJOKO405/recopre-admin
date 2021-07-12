<template>
  <v-row justify="center" align-content="center">
    <v-col cols="6" align-self="center">
      <v-card class="pa-8">
        <h1 class="text-center mb-8">ログイン</h1>
        <v-form ref="loginForm" v-model="isValid" lazy-validation>
          <v-text-field outlined label="ID" v-model="user.id" :rules="rules.id" />
          <v-text-field outlined label="パスワード" v-model="user.password" :rules="rules.password" class="mb-4" />
          <AppBtn :click-action="login" :btn-text="'ログイン'" :block="true" class="mb-4" />
          <AppBtn :click-action="login" :btn-text="'ユーザー登録はこちら'" is-outlined="true" :block="true" />
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
export default defineComponent({
  layout: 'no-header',
  setup() {
    const loginForm = ref<HTMLFormElement | null>(null)
    const isValid = ref(false)
    const user = reactive({
      id: '',
      password: ''
    })
    const { textRules, passwordRules } = useValidationRules()
    const rules = {
      id: textRules(),
      password: passwordRules()
    }
    const login = () => {
      if (!loginForm.value!.validate()) return
    }
    return { loginForm, user, isValid, rules, login }
  }
})
</script>
