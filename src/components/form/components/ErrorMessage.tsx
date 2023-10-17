import { FieldError } from 'react-hook-form';

// STYLES
import 'src/components/form/components/styles.scss';

export interface ErrorMessageInterface {
	error?: FieldError;
}

export const ErrorMessage = ({ error }: { error: FieldError | undefined }) => (
	<span className="error-message">{error?.message}</span>
);
