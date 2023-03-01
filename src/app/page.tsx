import Hero from './Hero';
import Projects from './projects';
import Aboutme from './AboutMe';
import Contact from './Contact';

export default function Home() {
	return (
		<>
			<Hero />
			<Projects/>
			<Aboutme/>
			<Contact/>
		</>
	);
}
