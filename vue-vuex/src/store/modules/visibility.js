
let visibility = 'all';

const mutations = {
    toggleVisibility(state,visibility){
        state.visibility = visibility;
    }
};

const actions = {
    toggleVisibility({commit},visibility){
        commit('toggleVisibility',visibility);
    }
};

export default {
    state:{
        visibility
    },
    mutations,
    actions
};
