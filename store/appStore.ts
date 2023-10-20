interface State {
    isLoading: boolean;
}
export const state = () => ({
    isLoading: true,
})

export const getters = {
    getIsLoading(state: State) {
        return state.isLoading;
    }
}

export const mutations = {
    changeIsLoading(state: State, value: boolean) {
        state.isLoading = value;
    }
}

export const actions = {
    /*logout({ commit }) {
        setToken(null);
        commit('setUsername', null);
    }*/
}