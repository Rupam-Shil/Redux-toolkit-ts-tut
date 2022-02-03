import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
	value: Customer[];
}

interface Customer {
	id: string;
	name: string;
	foodItems: string[];
}

interface FoodItem {
	id: string;
	food: string;
}

const initialState: CustomerState = {
	value: [],
};

export const customerSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {
		addCustomer: (state, action: PayloadAction<Customer>) => {
			state.value.push(action.payload);
		},
		updateFoodItem: (state, action: PayloadAction<FoodItem>) => {
			state.value.forEach((customer) => {
				if (customer.id === action.payload.id) {
					customer.foodItems.push(action.payload.food);
					return;
				}
			});
		},
	},
});
export const { addCustomer, updateFoodItem } = customerSlice.actions;
export default customerSlice.reducer;
