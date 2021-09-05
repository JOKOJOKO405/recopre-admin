import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  time: 1
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  time: state => state.time
}

export const mutations: MutationTree<RootState> = {
  setTime: (state, time: number) => (state.time = time)
}

export const actions: ActionTree<RootState, RootState> = {
  setTime: ({ commit }, context) => {
    commit('setTime', context)
  }
}
