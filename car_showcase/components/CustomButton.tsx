'use client';

import { CustomButtonProps } from '@/types';

import React from 'react';
import Image from 'next/image';

const CustomButton = ({
	title,
	containerStyles,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={(handleClick) => {}}
		>
			<span className={`flex-1`}>View Inventory</span>
		</button>
	);
};

export default CustomButton;
