import "./App.css";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import Navigation from "./components/Navigation";
import TravelSection from "./components/TravelSection";
import WeatherComponent from "./components/WeatherComponent";

function App() {
	return (
		<>
			<Navigation />
			<HeroSection />
			<LatestNews />
			<TravelSection />
			<WeatherComponent />
		</>
	);
}

export default App;
