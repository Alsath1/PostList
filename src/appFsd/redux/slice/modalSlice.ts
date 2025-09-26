'use client';
import { createSlice } from '@reduxjs/toolkit';
interface States {
    isOpenMainModal: boolean;
}

const initialState: States = { isOpenMainModal: true };

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        SetIsOpenMainModal(state, action) {
            state.isOpenMainModal = action.payload;
        }
    }
});

export default modalSlice.reducer;
