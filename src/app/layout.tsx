import './globals.css';
import Navbar from './NavBar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body>
				<Navbar />

				<main>{children}</main>

				<footer></footer>
			</body>
		</html>
	);
}
