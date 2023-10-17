import { ReactNode } from 'react';

// COMPONENTS
import { ErrorMessage, ErrorMessageInterface } from 'src/components/form/components/ErrorMessage';

// STYLES
import 'src/components/form/components/styles.scss';

export interface LabelInterface extends ErrorMessageInterface {
	label?: string;
	id?: string;
	children: ReactNode;
}

export const Label = ({ id, label, children, error }: LabelInterface) => (
	<label htmlFor={id} className="label">
		{label && <span className="label__text">{label}</span>}
		{children}
		<ErrorMessage error={error} />
	</label>
);
