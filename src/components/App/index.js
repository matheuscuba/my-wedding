import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import ReactFullpage from '@fullpage/react-fullpage';

import "./style.scss";

import HomeSection from './../Home';
import InfoSection from './../Info';
import Loading from "../Loading";
import { useState } from "react";

function App() {

	const [loading, setLoading] = useState(true);
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

	if(loading)
		return <Loading onClick={() => setLoading(false)} />;

	return (
		<ReactFullpage.Wrapper
			licenseKey = {'YOUR_KEY_HERE'}
			scrollingSpeed = {1000}
			navigation
			debug
		>
			<div className="App">
				<HomeSection isMobile={isMobile} />
				<InfoSection isMobile={isMobile} />
			</div>	
		</ReactFullpage.Wrapper>

	);
}

export default App;
