export let axios: any

export default ({ redirect, $axios }: any) => {
  $axios.onError((err: any) => {
    const status = err.response?.status
    if (status === 401) {
      window.location.href = '/'
    }
    if (status === 422) {
      return Promise.resolve(err.response)
    }
  })
  axios = $axios
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
}
