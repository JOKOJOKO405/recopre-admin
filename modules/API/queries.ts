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
  return await axios.post('/api/auth', val)
}
export const signIn = async (val: SignIn) => {
  return await axios.post('/api/auth/sign_in', val)
}
// children
export const getChildren = async (token: any) => {
  return await axios.get('/api/children', { headers: token })
}
// todos
export const getTodos = async () => {
  return await axios.get('/api/todos')
}
// grades
export const getGrades = async () => {
  return await axios.get('/api/grades')
}
// seals
export const getAllSeals = async () => {
  const seal = await axios.get('/api/seals')
  return seal.data
}
