import camelize from "camelize";
import { mocks } from "./index";
export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
	return new Promise((resolve, reject) => {
		const mockResult = mocks[location];
		if (!mockResult) {
			reject("not found");
		}
		resolve(mockResult);
	});
};

const restaurantsTransform = (result) => {
	const newResult = camelize(result);
	return newResult;
};
restaurantRequest()
	.then(restaurantsTransform)
	.then((transformedResult) => console.log(transformedResult))
	.catch((err) => console.log(err));
