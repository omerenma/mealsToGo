import styled from "styled-components/native";
import { StatusBar, View, SafeAreaView } from "react-native";

import { colors } from "./colors";
import { fontSizes, fontWeights, fonts } from "./fonts";
import { sizes } from "./sizes";
import { lineHeights, space } from "./spacing";
import { Card } from "react-native-paper";
import {Text} from "../typography/TextComponent"
export const theme = {
	colors,
	fontSizes,
	fontWeights,
	fonts,
	sizes,
	lineHeights,
	space,
};

export const Address = styled.Text`
font-family:${(props) => props.theme.fonts.bold};
font-size:${(props) => props.theme.fontSizes.caption}
margin-left: ${(props) => props.theme.space[4]}


`;


// export const Title = styled.Text`
// 	font-size:${(props) => props.theme.fontSizes.body}
// 	font-family:${(props) => props.theme.fonts.body};
// 	color: ${(props) => props.theme.colors.ui.error};
// 	padding: ${(props) => props.theme.sizes[1]};
// 	margin-left: ${(props) => props.theme.sizes[1]};
// `;

export const RestauranCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	 margin-top: ${props => props.theme.space[4]};
	 padding"${props => props.theme.space[4]}
`;
export const CardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.sizes[1]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	margin-top: ${StatusBar.currentHeight}px;
`;
export const SearchView = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;
export const RestInfoView = styled(View)`
	flex: 1;
	flex-grow: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
	flex-direction: row;
	align-items: center;
`;
export const SectionEnd = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const Rating = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-left: 30px;
`;
