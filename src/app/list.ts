import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../components/list/Item';

interface ItemList {
    list: Array<Item>
}

const initialState: ItemList = {
    list: []
}

const counterSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let sortById;

            state.list.length > 0 
            ? sortById = state.list.reduce((a, b) => a.id > b.id ? a : b).id + 1 
            : sortById = state.list.length + 1

            state.list.push({
                id: sortById,
                positionId: state.list.length + 1,
                icon: action.payload.item.icon,
                name: action.payload.item.name,
                text: action.payload.item.text || '',
                src: action.payload.item.src || '',
                active: false,
                placeholder: action.payload.item.placeholder,
            });
        },

        activeItem: (state, action) => {
            state.list.forEach(el => el.active = false)
            state.list[action.payload - 1].active = true
        },

        changeValue: (state, action) => {
            state.list[action.payload.positionId - 1].name !== 'image' ?
                state.list[action.payload.positionId - 1].text = action.payload.value :
                state.list[action.payload.positionId - 1].src = action.payload.value
        },
        incrementPosition: (state, action) => {
            state.list.forEach(el => {
                if (el.positionId + 1 === action.payload) {
                    el.positionId++
                    state.list[action.payload - 1].positionId--
                }
            })

            state.list = state.list.sort((a, b) => a.positionId - b.positionId)

        },
        decrementPosition: (state, action) => {
            state.list.forEach(el => {
                if (el.positionId + 1 === action.payload + 1) {
                    el.positionId++
                    state.list[action.payload].positionId--
                }
            })

            state.list = state.list.sort((a, b) => a.positionId - b.positionId)
        },

        copyItem: (state, action) => {
            state.list.forEach(el => el.positionId === action.payload ? state.list.push({
                ...state.list[action.payload - 1],
                id: state.list.length + 1,
                positionId: state.list.length + 1
            }) : '')

        },
        deleteItem: (state, action) => {
            state.list.splice(action.payload - 1, 1)
            state.list.forEach(el => el.positionId >= action.payload ? el.positionId-- : '')
        }
    }
})

export const { addItem, activeItem, changeValue, incrementPosition, decrementPosition, copyItem, deleteItem } = counterSlice.actions;
export default counterSlice.reducer;