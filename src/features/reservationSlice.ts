import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState {
	value: string[];
}

const initialState: ReservationState = {
	value: ['selena'],
};

export const reservationSlice = createSlice({
	name: 'reservations',
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<string>) => {
			state.value.push(action.payload);
		},
		removeReservation: (state, action: PayloadAction<number>) => {
			state.value.splice(action.payload, 1);
		},
	},
});
export const { addReservation } = reservationSlice.actions;
export const { removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;