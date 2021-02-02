export default {
    addName: ({
        commit
    }, payload) => {
        commit('addName', payload)
    },
    selectedCategoryId: ({
        commit
    }, payload) => {
        commit('selectedCategoryId', payload)
    }
}