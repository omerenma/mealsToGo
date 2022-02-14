import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantScreen } from "../components/features/restaurants/components/RestaurantScreen";
// import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { restaurantRequest } from "../services/restaurants/mock/restaurants.service";

// function Search() {
// 	return <Searchbar />;
// }

export const Settings = () => {
	return (
		<View>
			<Text>Settings</Text>
		</View>
	);
};

export const Map = () => {
	return (
		<View style={{ backgroundColor: "tomato" }}>
			<Text>Map</Text>
		</View>
	);
};

const tabs = createBottomTabNavigator();
export const NavigationScreen = () => {
	useEffect(() => {
		restaurantRequest();
	}, []);
	return (
		<NavigationContainer>
			<tabs.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === "Restaurants") {
							iconName = focused
								? "md-restaurant-outline"
								: "md-restaurant-sharp";
						}
						if (route.name === "Settings") {
							iconName = focused ? "settings-outline" : "settings-sharp";
						}
						if (route.name === "Map") {
							iconName = focused ? "md-map-outline" : "md-map-sharp";
						}
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: "tomato",
					tabBarInactiveTintColor: "gray",
				})}
			>
				<tabs.Screen name="Restaurants" component={RestaurantScreen} />
				<tabs.Screen name="Map" component={Map} />
				<tabs.Screen name="Settings" component={Settings} />
			</tabs.Navigator>
		</NavigationContainer>
	);
};
