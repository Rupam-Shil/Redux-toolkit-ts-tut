import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
	name: string;
	index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
	const dispatch = useDispatch();

	const handleRemoveReservation = () => {
		dispatch(removeReservation(index));
		dispatch(
			addCustomer({
				id: nanoid(),
				name,
				foodItems: [],
			})
		);
	};

	return (
		<div
			className="reservation-card-container"
			onClick={handleRemoveReservation}
		>
			{name}
		</div>
	);
}
