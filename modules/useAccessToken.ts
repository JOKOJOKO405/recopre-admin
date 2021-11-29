import { reactive } from '@nuxtjs/composition-api'

export const useUserAccessToken = () => {
  const headers = reactive({
    uid: '',
    client: '',
    'access-token': ''
  })

  const initHeaders = () => ({
    uid: '',
    client: '',
    token: ''
  })

  const setHeaderData = (data: any) => {
    headers.uid = data.uid
    headers.client = data.client
    headers['access-token'] = data['access-token']
    return headers
  }

  return {
    headers,
    setHeaderData,
    initHeaders
  }
}
