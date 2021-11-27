import { NuxtAxiosInstance } from '@nuxtjs/axios'
export let axios: NuxtAxiosInstance

export default ({ _, $axios }: any) => {
  // $axios.onError((err: any) => {
  //   const status = err.response?.status
  //   if (status === 401) {
  //     window.location.href = '/'
  //   }
  //   if (status === 422) {
  //     return Promise.resolve(err.response)
  //   }
  // })
  axios = $axios
}
