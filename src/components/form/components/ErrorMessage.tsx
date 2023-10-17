import { FieldError } from 'react-hook-form';

// STYLES

export interface ErrorMessageInterface {
	error?: FieldError;
}

export const ErrorMessage = ({ error }: { error: FieldError | undefined }) => {
	if (!error) return null;

	return <span>{error.message}</span>;
};
