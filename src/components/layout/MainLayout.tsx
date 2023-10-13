import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return <ErrorBoundary FallbackComponent={() => null}>{children}</ErrorBoundary>;
};
