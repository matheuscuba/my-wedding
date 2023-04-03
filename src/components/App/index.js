import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

import "./style.scss";

import HomeSection from './../Home';
import InfoSection from './../Info';

function App() {
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

	return (
		<ParallaxProvider>
			<div className="App">
				<HomeSection isMobile={isMobile} />
				<InfoSection />
			</div>
		</ParallaxProvider>
	);
}

export default App;
