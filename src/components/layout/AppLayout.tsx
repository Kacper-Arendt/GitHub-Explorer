import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

//STYLES
import 'src/components/layout/styles.scss';

// COMPONENTS
import { HeaderNavigation } from 'src/components/navigation';
import { FallbackError } from 'src/components/errors';
import { LanguageSelect } from 'src/components/language';

export const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div className="app-layout">
				<ErrorBoundary FallbackComponent={FallbackError}>
					<header className="app-layout__header">
						<HeaderNavigation />
						<LanguageSelect />
					</header>
				</ErrorBoundary>

				<ErrorBoundary FallbackComponent={FallbackError}>
					<main className="app-layout__main">{children}</main>
				</ErrorBoundary>
			</div>
		</ErrorBoundary>
	);
};
