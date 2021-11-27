<template>
  <v-row justify="center" align-content="center" style="height: 100%">
    <v-col cols="6" align-self="center">
      <v-card class="pa-8" elevation="0">
        <h1 class="text-center mb-8">新規登録</h1>
        <v-form ref="loginForm" v-model="isValid" lazy-validation>
          <v-text-field
            outlined
            label="Eメール"
            v-model="user.email"
            :rules="rules.email"
          />
          <v-text-field
            outlined
            label="なまえ"
            v-model="user.name"
            :rules="rules.name"
          />
          <v-text-field
            outlined
            label="パスワード"
            v-model="user.password"
            :rules="rules.password"
            type="password"
            class="mb-4"
          />
          <v-text-field
            outlined
            label="パスワード確認"
            v-model="user.password_confirmation"
            :rules="rules.password"
            type="password"
            class="mb-4"
          />
          <AppBtn
            @click="register"
            :btn-text="'登録する'"
            :block="true"
            class="mb-4"
          />
          <AppBtn
            @click="goToLogin"
            :btn-text="'ログインへ戻る'"
            :is-outlined="true"
            :block="true"
          />
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  useRouter
} from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
import { signUp } from '@/modules/API/queries'
export default defineComponent({
  layout: 'no-header',
  setup() {
    const router = useRouter()
    const loginForm = ref<HTMLFormElement | null>(null)
    const isValid = ref(false)
    const user = reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    const { textRules, passwordRules } = useValidationRules()
    const rules = {
      name: textRules(),
      email: textRules(),
      password: passwordRules()
    }
    const register = async () => {
      if (!loginForm.value!.validate()) return
      try {
        const res = await signUp(user)
        if (res.data) {
          router.push(`/${res.data.data.id}`)
        }
      } catch (e) {
        console.error(e)
      }
    }
    const goToLogin = () => {
      router.push('/sign-in')
    }
    return { loginForm, user, isValid, rules, register, goToLogin }
  }
})
</script>
