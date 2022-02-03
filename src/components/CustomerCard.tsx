import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFoodItem } from '../features/customerSlice';

interface CustomerCardType {
	id: string;
	name: string;
	food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardType) {
	const dispatch = useDispatch();
	const [foodInput, setFoodInput] = useState('');
	const handleFoodInput = () => {
		if (!foodInput) return;
		dispatch(updateFoodItem({ id, food: foodInput }));
		setFoodInput('');
	};
	return (
		<div className="customer-food-card-container">
			<p>Selena Gomez</p>
			<div className="customer-foods-container">
				<div className="customer-food">
					{food.map((each) => {
						return <p>{each}</p>;
					})}
				</div>
				<div className="customer-food-input-container">
					<input
						type="text"
						value={foodInput}
						onChange={(e) => setFoodInput(e.target.value)}
					/>
					<button onClick={handleFoodInput}>Add</button>
				</div>
			</div>
		</div>
	);
}
