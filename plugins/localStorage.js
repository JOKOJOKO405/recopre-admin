import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(()=>{
    createPersistedState({
      key: 'recopre-admin'
    })(store)
  })
}