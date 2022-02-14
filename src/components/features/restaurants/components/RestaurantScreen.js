import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfo } from "./screens/RestaurantInfoCards";
import { SafeArea, SearchView } from "../../../theme/index";

export const RestaurantScreen = () => {
	return (
		<SafeArea>
			<SearchView>
				<Searchbar />
			</SearchView>
			<FlatList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
					{ name: 7 },
					{ name: 8 },
					{ name: 9 },
					{ name: 10 },
					{name:11},
					{name:12},
					{name:13},
					{name:14},
					{name:15},
					{name:16},
					{name:17},
					{name:18}
				]}
				renderItem={() => <RestaurantInfo name="kings" />}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 10 }}
			/>
		</SafeArea>
	);
};
