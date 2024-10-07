
import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
    },
    reducers: {
        toggleTheme: store => {
            store.theme = store.theme === 'light' ? 'dark' : 'light';
        },

    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer