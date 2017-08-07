const TOGGLE = 'comparedProduct/TOGGLE'


export const toggle = productId => ({
    type: TOGGLE,
    productId
})


const initialState = {
    productsIds: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE:
            return {
                ...state,
                productsIds: state.productsIds.length < 3 ? state.productsIds.includes(action.productId) ?
                    state.productsIds.filter(
                        productId => action.productId !== productId
                    ) :
                    state.productsIds.concat(action.productId) :
                    state.productsIds.filter(
                        productId => action.productId !== productId
                    )
            }
        default:
            return state
    }
}