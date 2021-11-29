<template>
  <v-row justify="center" align-content="center" style="height: 100%">
    <v-col cols="6" align-self="center">
      <v-card class="pa-8" elevation="0">
        <h1 class="text-center mb-8">ログイン</h1>
        <v-form ref="loginForm" v-model="isValid" lazy-validation>
          <v-text-field
            outlined
            label="Eメール"
            v-model="user.email"
            :rules="rules.email"
          />
          <v-text-field
            outlined
            label="パスワード"
            v-model="user.password"
            :rules="rules.password"
            type="password"
            class="mb-4"
          />
          <AppBtn
            @click="login"
            :btn-text="'ログイン'"
            :block="true"
            class="mb-4"
          />
          <AppBtn
            @click="goToSignUp"
            :btn-text="'ユーザー登録はこちら'"
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
  useRouter,
  useStore
} from '@nuxtjs/composition-api'
import useValidationRules from '@/modules/useValidationRules'
import { useUserAccessToken } from '@/modules/useAccessToken'
import { signIn } from '@/modules/API/queries'
export default defineComponent({
  layout: 'no-header',
  setup() {
    const store = useStore()
    const router = useRouter()
    const loginForm = ref<HTMLFormElement | null>(null)
    const isValid = ref(false)
    const user = reactive({
      email: '',
      password: ''
    })
    const { textRules, passwordRules } = useValidationRules()
    const rules = {
      email: textRules(),
      password: passwordRules()
    }
    const { headers, initHeaders, setHeaderData } = useUserAccessToken()
    const login = async () => {
      if (!loginForm.value!.validate()) return
      try {
        const res = await signIn(user)
        if (res.data) {
          setHeaderData(res.headers)
          store.dispatch('user/setUser', headers)
          router.push(`/${res.data.data.id}`)
        } else {
          console.debug('error')
        }
      } catch (e) {
        console.error(e)
      }
    }
    const goToSignUp = () => {
      router.push('/sign-up')
    }
    return { loginForm, user, isValid, rules, login, goToSignUp }
  }
})
</script>
