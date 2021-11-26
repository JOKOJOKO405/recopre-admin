import { axios } from '@/plugins/axios/index'

interface SignUp {
  name: string
  email: string
  password: string
  password_confirmation: string
}

interface SignIn {
  email: string
  password: string
}

export const signUp = async (val: SignUp) => {
  return await axios.post('/auth', val)
}
export const signIn = async (val: SignIn) => {
  return await axios.post('/auth/sign_in', val)
}
