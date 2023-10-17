import { ReactNode } from 'react';

// COMPONENTS
import { ErrorMessage, ErrorMessageInterface } from 'src/components/form/components/ErrorMessage';

// STYLES

export interface LabelInterface extends ErrorMessageInterface {
	label?: string;
	id?: string;
	children: ReactNode;
}

export const Label = ({ id, label, children, error }: LabelInterface) => (
	<label htmlFor={id}>
		{label && <span>{label}</span>}
		{children}
		{error && <ErrorMessage error={error} />}
	</label>
);
