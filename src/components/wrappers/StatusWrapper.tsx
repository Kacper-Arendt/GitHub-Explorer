import { t } from 'i18next';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Loader } from 'src/components/loaders';

export const StatusWrapper = ({
	children,
	isSuccess,
	isError,
	isLoading,
}: {
	children: ReactNode;
	isSuccess: boolean;
	isError: boolean;
	isLoading: boolean;
}) => {
	if (isError) return <p>{t('errors.fallbackErrorMessage')}</p>;

	if (isSuccess) return <ErrorBoundary FallbackComponent={FallbackError}>{children}</ErrorBoundary>;

	if (isLoading) return <Loader />;

	return null;
};
