import { configureStore } from '@reduxjs/toolkit'

import updatePropsReducer from './slices/updatePropsSlice'

export const store = configureStore({
    reducer: {
        updateProps : updatePropsReducer,
    },
})