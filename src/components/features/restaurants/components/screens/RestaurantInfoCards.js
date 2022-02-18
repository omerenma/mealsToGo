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

export const RestaurantInfo = ({ restaurant }) => {
	console.log(restaurant.photos, "my photos");
	const {
		name,
		icon,
		photos,
		vicinity,
		isOpenNow,
		rating,
		isClosedTemporarily,
	} = restaurant;
	const closeIcon =
		"https://media.istockphoto.com/photos/sorry-we-are-closed-picture-id1218418104?b=1&k=20&m=1218418104&s=170667a&w=0&h=7tSd0zYZcx38jLtV8BgdkC9Kz_O26ytxvw18ZaLEgi0=";

	const ratingArray = Array.from(new Array(Math.floor(rating)));
	return (
		<RestauranCard>
			<CardCover source={{ uri: photos[0] }} />
			<Text variant="label">{name}</Text>
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
			<Address>{vicinity}</Address>
		</RestauranCard>
	);
};
