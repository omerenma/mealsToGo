import React ,{useState} from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
	useFonts as useOswald,
	Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { RestaurantScreen } from "./src/components/features/restaurants/components/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/components/theme/index";
import { NavigationScreen } from "./src/navigations/TabNavigation";

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
				<NavigationScreen />
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
		</>
	);
}
