import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    algorithm: 'bubble',
    color: '#35c6ff',
    speed: 100,
    range: '30',
    play: false,
    values: [],
    timeouts: []
}

export const updatePropsSlice    = createSlice({
    name: 'updateProps',
    initialState,
    reducers: {
        updateRange: (state,action) => {
            let arr = [];
            for (let i = 0; i < action.payload; i++){
                arr.push([Math.floor(Math.random() * 100) + 1, i]);
            }
            state.range = action.payload;
            state.values = arr;
        },
        updateValues: (state,action) => {
            state.values = action.payload;
        },
        updateSpeed: (state, action) => {
            state.speed = action.payload;
        },
        updateColor: (state, action) => {
            state.color = action.payload;
        },
        updateAlgorithm: (state, action) => {
            state.algorithm = action.payload
        },
        updateTimeouts: (state, action) => {
            state.timeouts = action.timeouts
        },
        changeValues: (state) => {
            let arr = [];
            let range = state.range;
            for (let i = 0; i < range; i++)
                arr.push([Math.floor(Math.random() * 100) + 1, i]);
            state.values = arr;
        },
        playOrPause: (state, action) => {
            state.play = action.payload;
        },
    },
})

export const {
    updateRange,
    updateSpeed,
    updateColor,
    updateAlgorithm,
    updateTimeouts,
    changeValues,
    playOrPause
} = updatePropsSlice.actions

export default updatePropsSlice.reducer