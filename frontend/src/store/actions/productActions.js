import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../../constants/productConstants'


export const listProducts = () =>
    async (dispatch) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST })
            const response = await fetch('/api/products')
            const data = await response.json()
            dispatch({ type: PRODUCT_LIST_SUCCESS, data })
        } catch (error) {
            dispatch({ type: PRODUCT_LIST_FAILURE, data: error.response && error.response.data.message ? error.response.data.message : error.message })
        }
    }
