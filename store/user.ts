import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  headers: {
    uid: '',
    client: '',
    'access-token': ''
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  headers: state => state.headers
}

export const mutations: MutationTree<RootState> = {
  setUser: (state, context: any) => (state.headers = context)
}

export const actions: ActionTree<RootState, RootState> = {
  setUser: ({ commit }, context) => {
    commit('setUser', context)
  }
}
