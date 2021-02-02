export default {
    addName: (state, {
        name        
    }) => {
        state.name = name
    },
    selectedCategoryId: (state, {
        id        
    }) => {
        state.categoryId = id
    }
}