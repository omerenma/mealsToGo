import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
	useFonts as useOswald,
	Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/components/theme/index";
import { NavigationScreen } from "./src/navigations/TabNavigation";
import { RestaurantContextProvider } from "./src/services/restaurants/mock/restaurants.context";

// const isAndroid = Platform.OS === "android";

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_700Bold,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return <AppLoading />;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				{/* <RestaurantScreen /> */}
				<RestaurantContextProvider>
					<NavigationScreen />
				</RestaurantContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
