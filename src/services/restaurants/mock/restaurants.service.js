import camelize from "camelize";
import { mockImages, mocks } from "./index";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
	return new Promise((resolve, reject) => {
		const mockResult = mocks[location];
		if (!mockResult) {
			reject("not found");
		}
		resolve(mockResult);
	});
};

export const restaurantsTransform = ({results = [] }) => {
	const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
        })
        return {
            ...restaurant,
            isOpenNow:restaurant.openin_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",

        }
    })
	return camelize(mappedResults);
};
