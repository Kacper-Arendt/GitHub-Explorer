import { ReactNode } from 'react';

// STYLES
import 'src/components/button/styles.scss';

export interface ButtonInterface {
	children: ReactNode;
	type: 'button' | 'reset' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({ children, type, disabled, onClick }: ButtonInterface) => (
	<button type={type} disabled={disabled} onClick={onClick} className="button">
		{children}
	</button>
);
