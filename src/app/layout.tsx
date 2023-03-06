import './globals.css';
import Navbar from './NavBar';
import StyledComponentsRegistry from 'lib/registry';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body>
				<StyledComponentsRegistry>
					<>
						<Navbar />

						<main>{children}</main>

						<footer></footer>
					</>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
