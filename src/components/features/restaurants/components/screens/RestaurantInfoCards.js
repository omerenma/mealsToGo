import React from "react";
import { View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import {
	Address,
	RestauranCard,
	CardCover,
	Rating,
	Section,
	SectionEnd,
} from "../../../../theme/index";
import star from "../../../../../../assets/star";
import svgOpen from "../../../../../../assets/svgOpen";
import { Spacer } from "../../../../spacer/spacerComponent";
import { Text } from "../../../../typography/TextComponent";

export const RestaurantInfo = () => {
	// const {
	// 	name = "Some Restaurant",
	// 	icon = "https://media.istockphoto.com/photos/sorry-we-are-closed-picture-id1218418104?b=1&k=20&m=1218418104&s=170667a&w=0&h=7tSd0zYZcx38jLtV8BgdkC9Kz_O26ytxvw18ZaLEgi0="
	// 	photos = [
	// 		"https://www.istockphoto.com/photo/portrait-of-asian-senior-man-barista-or-coffee-owner-using-coffee-machine-and-gm1286796686-383191592",
	// 	],
	// 	address = "100 some random street",
	// 	isOpenNow = true,
	// 	rating = 4,
	// 	isClosedTemporarily,
	// } = restaurant;
	const closeIcon =
		"https://media.istockphoto.com/photos/sorry-we-are-closed-picture-id1218418104?b=1&k=20&m=1218418104&s=170667a&w=0&h=7tSd0zYZcx38jLtV8BgdkC9Kz_O26ytxvw18ZaLEgi0=";
	const isClosedTemporarily = true;
	const isOpenNow = true;
	const rating = 7;
	const ratingArray = Array.from(new Array(Math.floor(rating)));
	return (
		<RestauranCard>
			<CardCover
				source={{
					uri: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
				}}
			/>
			<Text variant="label">Card content</Text>
			<Section>
				<Rating>
					{ratingArray.map((rate) => (
						<SvgXml xml={star} height={20} width={20} key={rate} />
					))}
				</Rating>
				<SectionEnd>
					<Spacer position="left" size="large" />
					{isClosedTemporarily && <Text variant="error">Closed!</Text>}
					{/* </Spacer> */}
					{isOpenNow && (
						<View>
							<SvgXml
								xml={svgOpen}
								height={20}
								width={20}
								style={{ justifyContent: "flex-end" }}
							/>
						</View>
					)}
					<Image
						style={{ width: 40, height: 30 }}
						source={{ uri: closeIcon }}
					/>
				</SectionEnd>
			</Section>
			<Address>Silver restaurant, 100 wind zone</Address>
		</RestauranCard>
	);
};
