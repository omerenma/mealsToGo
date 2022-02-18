import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, ActivityIndicator } from "react-native";
import { RestaurantInfo } from "./screens/RestaurantInfoCards";
import { SafeArea, SearchView } from "../../../theme/index";
import { RestaurantContext } from "../../../../services/restaurants/mock/restaurants.context";

export const RestaurantScreen = () => {
	const {isLoading, error, restaurants } = useContext(RestaurantContext);

	return (
		<SafeArea>
			<SearchView>
				<Searchbar />
			</SearchView>
			{isLoading ? (
				<ActivityIndicator size="large" color="tomato" />
			) : (
				<FlatList
					data={restaurants}
					renderItem={({item}) => <RestaurantInfo restaurant={item} />}
					keyExtractor={(item) => item.name}
					// contentContainerStyle={{ padding: 10 }}
				/>
			)}
		</SafeArea>
	);
};
