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
interface TodoInput {
  name: string
  kana: string
  timezone: string
}

interface ChildCreateInput {
  name: string
  grade: number
  icon: string
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
export const createChild = async (data: ChildCreateInput) => {
  return await axios.post('/api/children', data)
}

// todos
export const getTodos = async () => {
  return await axios.get('/api/todos')
}
export const createTodos = async (data: TodoInput) => {
  return await axios.post('/api/todos', data)
}
export const updateTodos = async (id: number, data: TodoInput) => {
  return await axios.put(`/api/todos/${id}`, data)
}
export const deleteTodos = async (id: number) => {
  return await axios.delete(`/api/todos/${id}`)
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

// child_todos
export const createChildTodos = async (id: number, todo: TodoInput) => {
  return await axios.post(`/api/children/${id}/todos`, todo)
}
