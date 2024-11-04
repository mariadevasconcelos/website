/* * */

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import './reset.css';

/* * */

export const metadata = {
	title: 'Maria de Vasconcelos | Portfolio',
};

/* * */

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
