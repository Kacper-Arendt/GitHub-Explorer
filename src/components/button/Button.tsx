import { ReactNode } from 'react';

// STYLES
import 'src/components/button/styles.scss';
import clsx from 'clsx';

export interface ButtonInterface {
	children: ReactNode;
	type: 'button' | 'reset' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	flexible?: boolean;
}

export const Button = ({ children, type, disabled, onClick, flexible }: ButtonInterface) => (
	<button type={type} disabled={disabled} onClick={onClick} className={clsx('button', { 'button--flexible': flexible })}>
		{children}
	</button>
);
