/* * */

import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';

/* * */

import '@mantine/core/styles.css';

import './reset.css';

/* * */

export const metadata = {
	title: 'react-pdf sample page',
};

/* * */

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<body>
				<Analytics />
				<MantineProvider>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
