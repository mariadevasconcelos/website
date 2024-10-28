export const metadata = {
	title: 'react-pdf sample page',
};

import { MantineProvider } from '@mantine/core';

import './reset.css';
import '@mantine/core/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<body>
				<MantineProvider>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
